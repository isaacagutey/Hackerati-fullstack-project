  //Declare neccesary varibles
  var acceleration;
  var velocity;
  var seconds;
  var socket = io.connect();

//Store data sent by the socket for graphing
  socket.on('distance', function(distance){
    velocity = distance;
  });

  socket.on('time', function(time){
    seconds = time;
    acceleration = velocity/time;
  });

//Delete old data from table
 function old_data() {
     var old_data = $('#report tr:nth-child(2)');
     old_data.fadeOut(300, function(){old_data.remove()});
   };

 //Add new data to table
  setInterval(function(){
      $('#report').append('<tr class="success"><td>'+velocity+'</td><td>'+seconds+'</td><td>'+acceleration+'</td></tr>');
        setTimeout(old_data, 50000);
    },5000);

//Display number of current visitors on the page
  socket.on('online_users', function(users){
    if(users === 1){
        $('#users').html('You are the only <em>visitor</em> <strong>online</strong>')
      }else{
        $('#users').html('<i>'+users+'<i><em> visitors </em><strong>online<strong>')
      }
  
  });

  var data = {
    labels : ["0","0","0","0","0", "0", "0", "0", "0", "0"],
    datasets : [  
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgb(0,0,0)",
        pointColor : "rgb(255, 0, 0)",
        pointStrokeColor : "#FFFFFF",
        data : [0,0,0,0,0,0,0,0,0,0]
      }
    ]
  }
  
    var updateData = function(oldData){
    var labels = oldData["labels"];
    var dataSetB = oldData["datasets"][0]["data"];

    
    //shift old data out of graph space
    labels.shift();

    //push new data to graph space
    labels.push(seconds.toString());
    dataSetB.push(velocity);
    dataSetB.shift()};
      
  var optionsAnimation = {
    
    scaleOverride : true,
    scaleSteps : 10,
    scaleStepWidth : 10,
    scaleStartValue : 0
  }
  
  var optionsNoAnimation = {
    animation : false,
    scaleOverride : true,
    scaleSteps : 20,
    scaleStepWidth : 10,
    scaleStartValue : 0
  }
  
  //Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");
  var optionsNoAnimation = {animation : false}

  var myNewChart = new Chart(ctx);
  myNewChart.Line(data, optionsAnimation);  
  
  setInterval(function(){
    updateData(data);
    myNewChart.Line(data, optionsNoAnimation)
  }, 5000
  );