

var myapp = angular.module('myapp', ['ngRoute']);


// configure our routes
myapp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/chat.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/login.html'
        });

});
