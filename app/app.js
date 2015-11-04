(function(){

    var app = angular.module('newApp', ['ngRoute', 'ngMaterial']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

        $routeProvider
            .when('/', {
                controller:'PageController',
                templateUrl:'app/views/Page.html'
            })
            .when('/customer/:id', {
                controller:'CustomerController',
                templateUrl:'app/views/Customer.html'
            })
            .when('/admin', {
                controller:'AdminController',
                templateUrl:'app/views/Admin.html'
            })
            .otherwise({redirectTo: '/'});

    }]);

}());