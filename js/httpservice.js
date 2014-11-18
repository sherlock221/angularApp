var  myModule = angular.module("MyModule",[]);

myModule.factory("userService",['$http',function($http){

        var doRequest = function(username,path){
            return $http({
                method : "GET",
                url    :  "user.json"
            });
        }
    return  {
        userList : function(userName){
            return doRequest(userName,"userList");
        }
    }

}]);



myModule.controller("ServiceController",['$scope','$timeout','userService',function($scope,$timeout,userService){
    var timeout;
    $scope.$watch('username',function(newUserName){
        if(newUserName){
            if(timeout){
                $timeout.cancel(timeout);
            }

            timeout = $timeout(function(){
                userService
                    .userList(newUserName)
                    .success(function(data,status){
                        $scope.users = data;
                    });

            },300);
        }
    });

}]);