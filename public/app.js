

var myapp = angular.module('myapp', ['ngRoute']);



// configure our routes
myapp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/login.html',
            controller : 'ctrl1'
        })

        // route for the about page
        .when('/chat', {
            templateUrl : 'pages/chat.html',
            controller : 'ctrl2'
        });

});
