(function (angular) {
    var app=angular.module('myApp.controller',[]);
    //控制导航栏
    app.controller('header',function ($scope,http) {
        $scope.value='undefine';
        $scope.option=function (value) {
            $scope.value=value;
        }
    })
    //控制首页
    app.controller('home',function ($scope,http,locals,$routeParams,$location) {

        var url='http://api.douban.com/v2/movie/top250';
        http.jsonp(url,function (data) {
            $scope.dataList=data.subjects;
            console.log(data);
            $scope.$apply();
        },{'start':0,'count':10})

    })
    //控制电影列表
    app.controller('movieList',function ($scope,http,$routeParams,$location,locals) {
       url='http://api.douban.com/v2/movie/'+$routeParams.type;
        $scope.title='正在加载中...';

        $scope.page=1;
        $scope.prev=function () {
            if($scope.page>1){
                $scope.page--;
                $location.path('/movie/'+$routeParams.type+'/'+$scope.page);
            }
        }
        $scope.next=function () {
            if($scope.page<$scope.maxPage){
                $scope.page++;
                $location.path('/movie/'+$routeParams.type+'/'+$scope.page);
            }
        }

        $scope.maxPage=0;
        $scope.page=parseInt($routeParams.page)||1;

        http.jsonp(url,function(data){
            $scope.listData=data.subjects;
            //将列表中每个数据的id会话存储
            $scope.idList=[];
            angular.forEach($scope.listData,function (data) {
                $scope.idList.push(data.id);
            })
            // console.log($scope.idList);
            locals.setObject('id',$scope.idList);
        },{'count':100})

        http.jsonp(url,function (data) {
            // console.log(data);
            $scope.total=data.total;
            $scope.maxPage=Math.ceil(data.total/data.count);
            $scope.title=data.title;
            $scope.listData=data.subjects;
            $scope.$apply();
        },{'count':3,'start':($scope.page-1)*3,'q':$routeParams.q})
    })
    //控制电影详情页
    app.controller('movieDetail',function ($scope,http,$routeParams,$location,locals) {
        var url='http://api.douban.com/v2/movie/subject/'+$routeParams.id;
        $scope.idList=locals.getObject('id');
        $scope.index=$scope.idList.indexOf($routeParams.id);
        $scope.maxIndex=$scope.idList.length-1;
        $scope.prev=function () {
            if($scope.index>0){
                $scope.index--;
                $routeParams.id=$scope.idList[$scope.index];
                $location.path('/movieDetail/'+$routeParams.id);
            }
        }
        $scope.next=function () {
            if($scope.index<$scope.maxIndex){
                $scope.index++;
                $routeParams.id=$scope.idList[$scope.index];
                $location.path('/movieDetail/'+$routeParams.id);
            }
        }
        http.jsonp(url,function (data) {
            console.log(data);
            $scope.list=data;
            $scope.$apply();
        },{});
    })
    //控制电影评论页
    app.controller('movieComments',function ($scope,http,$routeParams,$location) {
        var url='http://api.douban.com/v2/movie/subject'+'/'+$routeParams.id+'/'+$routeParams.type;
        http.jsonp(url,function (data) {
           console.log(data);
        },{'start':0,'count':2})
    })
    //控制电影搜索
    app.controller('movieSearch',function ($scope,$routeParams,$location) {
        $scope.search=function () {
            $location.path('/movie/search').search('q',$scope.movieSearch);
            // console.log($location);
        }
    })
    //图书默认搜索
    app.controller('bookList',function ($scope,http,$routeParams,$location,locals){
        var url='https://api.douban.com/v2/book/search';
        $scope.page=1;
        $scope.prev=function () {
            if($scope.page>1){
                $scope.page--;
                $location.path('/book/search/'+$scope.page);
            }
        }
        $scope.next=function () {
            if($scope.page<$scope.maxPage){
                $scope.page++;
                console.log($scope.page);
                $location.path('/book/search/'+$scope.page);
            }
        }
        $scope.maxPage=0;
        $scope.page=parseInt($routeParams.page)||1;
        // console.log($routeParams);
        $scope.search=$routeParams.q||'小王子';


        //存储列表
        http.jsonp(url,function(data){
            // console.log(data)
            $scope.listData=data.books;
            //将列表中每个数据的id会话存储
            $scope.idList=[];
            angular.forEach($scope.listData,function (data) {
                $scope.idList.push(data.id);
            })
            console.log($scope.idList);
            locals.setObject('bookId',$scope.idList);
        },{'count':100,'start':0,q:$scope.search,field:'all'})





        http.jsonp(url,function (data) {
            console.log(data);
            $scope.listData=data.books;
            $scope.maxPage=Math.ceil(data.total/data.count);
            $scope.$apply();
        },{'count':3,'start':($scope.page-1)*3,q:$scope.search,field:'all'})


    })
    //图书手动搜索
    app.controller('bookSearch',function ($scope,$location) {
        $scope.search=function () {
            $location.path('/book/search').search('q',$scope.bookSearch);
            // console.log($location);
        }
    })
    //图书详情页
    app.controller('bookDetails',function ($scope,$location,$routeParams,http,locals) {
       var url='https://api.douban.com/v2/book/'+$routeParams.id;
        $scope.idList=locals.getObject('bookId');
        $scope.index=$scope.idList.indexOf($routeParams.id);
        $scope.maxIndex=$scope.idList.length-1;
        $scope.prev=function () {
            if($scope.index>0){
                $scope.index--;
                $routeParams.id=$scope.idList[$scope.index];
                $location.path('/bookDetails/'+$routeParams.id);
            }
        }
        $scope.next=function () {
            if($scope.index<$scope.maxIndex){
                $scope.index++;
                $routeParams.id=$scope.idList[$scope.index];
                $location.path('/bookDetails/'+$routeParams.id);
            }
        }
        http.jsonp(url,function (data) {
            // console.log(data);
            $scope.list=data;
            $scope.$apply();
        },{})
    })
})(angular)