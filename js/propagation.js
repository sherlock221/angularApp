function eventCtrl($scope , $rootScope){

    $scope.count = 0;

    //接受广播事件
    $scope.$on('MY EVENT', function() {
        $scope.count++;
    });

}


