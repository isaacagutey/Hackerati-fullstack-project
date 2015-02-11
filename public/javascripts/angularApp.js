angular

    .module('intervalApp', ['ui.router', 'templates','chart.js']) 

    .config(['$stateProvider',
             '$urlRouterProvider',
             function($stateProvider, $urlRouterProvider){

                 $stateProvider
                     .state('index', {
                         url: '/index',
                         templateUrl: 'views/index.ejs'
                     })

    .factory('posts', [
             '$http',
        function($http){

          var o = {
                posts: []
            };
            o.getAll = function() {
                return $http.get('/posts.json').success(function(data){
                    angular.copy(data, o.posts);
                });

            };
                 $urlRouterProvider.otherwise('home')
             }]);

