var  myModule = angular.module("MyModule",[]);

//缓存模板
//次方法只执行一次
myModule.run(function($templateCache){
    $templateCache.put("hello","<div>ddd</div>");
});

myModule.directive("hello",function($templateCache){
    return {
        restrict: "AE",
        //拼接字符串形式
//        template : "<div>hello i am test！</div>",
//        //模板形式
//        templateUrl : "template/hello.html",
        //缓存形式
//        template  : $templateCache.get("hello"),
        replace: true
    }
});

//加载阶段  找到ng-app指令  确定应用边界
//编译阶段  遍历dom 找到所有指令  根据指令代码中的template replace transclue转换dom结构  如果存在compile函数则继续调用
//链接阶段  link  对每一条指令运行link函数 link函数一般操作dom 绑定事件

//link 负责在模型和视图之间进行动态关联。