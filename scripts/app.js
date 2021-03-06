'use strict';

angular
    .module('weatherApp', [
        'ngRoute',
        'ngResource'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/city', {
                templateUrl: 'views/city.html',
                controller: 'cityCtrl'
            })
            .when('/coordinates', {
                templateUrl: 'views/coordinates.html',
                controller: 'coordinatesCtrl'
            })
            .otherwise({
                redirectTo:'/city'
            });
    });