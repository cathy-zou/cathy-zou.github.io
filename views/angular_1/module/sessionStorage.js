(function (angular) {
    var app=angular.module('myApp.sessionStorage',[]);
    app.factory('locals',['$window',function($window){
        return{        //存储单个属性
            set :function(key,value){
                $window.sessionStorage[key]=value;
            },        //读取单个属性
            get:function(key,defaultValue){
                return  $window.sessionStorage[key] || defaultValue;
            },        //存储对象，以JSON格式存储
            setObject:function(key,value){
                $window.sessionStorage[key]=JSON.stringify(value);
            },        //读取对象
            getObject: function (key) {
                return JSON.parse($window.sessionStorage[key] || '{}');
            }


        }
    }]);
})(angular)