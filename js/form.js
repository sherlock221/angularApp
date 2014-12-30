var  userInfoModule = angular.module("UserInfoModule",[]);
userInfoModule.controller("UserInfoCtrl", ['$scope','$rootScope',function($scope,$rootScope){
    $scope.user = {
        email :  "920825209@qq.com",
        password : "123456",
        autoLogin : false
    };

    $rootScope.style = {
        panelSkin : true
    }

    $scope.getFormDate = function(){
        console.log($scope.user);
    }


    $scope.reset = function(){
        $scope.user = {
            email :  "",
            password : "",
            autoLogin : false
        };
    }



    $scope.changeSkin = function(){
        $rootScope.style.panelSkin = false;
    }
}]);



