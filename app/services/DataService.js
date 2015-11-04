(function(){

    angular.module('newApp').factory('DataService', ['$http', function($http){

        var DataService = {};

        DataService.getMessage = function(){

            return 'Welcome!';
        }

        return DataService;

    }]);

}());