//Require need modules
var express = require('express');
var mongoose = require('mongoose');
require('../models/Speed');
var Speed = mongoose.model('Speed');
var router = express.Router();
var g_velocity;
var time;

//Generate and save data to database
function velocity(){
    var seconds = new Date().getSeconds();
    var velocity = Math.floor((Math.random() * 1001) + 0);
    var acceleration = new Speed({velocity:velocity, time: seconds});
    acceleration.save(function(err, acceleration){
    if(err) return console.error(err); 
    
    g_velocity = acceleration.velocity;
    time = acceleration.time

    });
};

setInterval(velocity, 2500);

//In other not to over populate the database,
//I set a function to clear a database every 5 seconds
setInterval(function(){
    mongoose.connection.db.dropCollection('speeds', function(err, result) {});
},5000);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

module.exports = router;
