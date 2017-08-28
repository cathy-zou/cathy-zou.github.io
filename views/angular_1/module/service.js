(function (angular) {
    var app=angular.module('myApp.service',[]);
    app.service('http',function () {
        this.jsonp=function (url,callback,data) {
            var name='jsonp'+Math.random().toString().slice(2);
            var str='';
            for(var k in data){
                str+='&'+k+'='+data[k];
            }
            window[name]=function (data) {
                callback(data);
                document.body.removeChild(script);
                window[name]=undefined;
            }
            var script=document.createElement('script');
            script.src=url+'?apikey=00fa6c0654689a0202ef4412fd39ce06&callback='+name+str;
            document.body.appendChild(script);
        }
    })
})(angular)