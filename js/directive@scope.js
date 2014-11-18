var myModule = angular.module("MyModule",[]);

myModule.controller("MyController",function($scope){
    $scope.ctrlFlavor = "百威";
});

myModule.directive("drink",function(){
    return {
        restrict: "AE",
//        template: "<div>{{flavor}}</div>",
////        link : function(scope,element,attrs){
////            scope.flavor = attrs.flavor;
////        }
//        //字符串绑定
//        scope: {
//            flavor : "@"
//        }
        scope: {
            flavor : "@"
        },
        //双向绑定
        template  : '<input  type="text"  ng-model="flavor" />'

    };
});