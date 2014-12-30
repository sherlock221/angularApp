//演示了 如何将传统的回掉嵌套修改为 promise方式
var myModule = angular.module("MyModule", []);


myModule.run(function ($templateCache) {});


myModule.controller("MainCtrl", function ($q, $http) {

    //获得用户
    var getUser = function () {
        var defer = $q.defer();
        $http.get("./data/user.json", {})
            .success(function (user) {
                defer.resolve(user);
            })
            .error(function (err) {
                defer.reject(err);
            })
        return defer.promise;
    }
    //获得角色
    var getRole = function (user) {
        var defer2 = $q.defer();
        $http.get("./data/role.json", {})
            .success(function (role) {
                defer2.resolve([user,role]);
            })
            .error(function (err) {
                defer2.reject(err);
            })
        return defer2.promise;
    }
    //获得权限
    var getRight = function (res) {
        var defer3 = $q.defer();
        $http.get("./data/right.json", {})
            .success(function (right) {
                res.push(right);
                defer3.resolve(res);
            })
            .error(function (err) {
                defer3.reject(err);
            })
        return defer3.promise;
    }


    //金字塔方式 传统情况
//    getUser(function(user){
//            getRole(user,function(role){
//                getRight(role,function(right){
//                });
//            });
//    });

    //扁平式 查询用户角色的权限业务 操作
    getUser()
        .then(getRole)
        .then(getRight)
        .then(function (ary) {
                console.log("user",ary[0]);
                console.log("role",ary[1]);
                console.log("right",ary[2]);
            }, function (err) {
                 console.log(err);
        });

});

//整个金字塔代码就很好被扁平化了
// @sherlock221b github