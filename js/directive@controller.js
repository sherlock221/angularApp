var  myModule = angular.module("MyModule",[]);

myModule.controller("MyController",function($scope){
    $scope.loadData = function(){
        console.log("加载数据中1.....");
    }
});

myModule.controller("MyController2",function($scope){
    $scope.loadData2 = function(){
        console.log("加载数据中2.....");
    }
});


myModule.directive("loader",function(){
    return {
        restrict: "AE",
        link : function(scope,element,attrs){
            element.bind("mouseenter",function(){
                //指令加载相同的方法
                //scope.loadData();
                //指令加载不同的方法
                //如果在页面上写的属性是 驼峰这里需要写出小写的
                scope.$apply( attrs.howtoload);
            });
        }
    }
});