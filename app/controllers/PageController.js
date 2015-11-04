(function(){

    angular.module('newApp').controller('PageController', ['$scope', 'DataService', function($scope, DataService){

        $scope.Message = '';

        function init(){
            $scope.Message = DataService.getMessage();
        }
        init();

    }]);



}());