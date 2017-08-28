(function (angular) {
    var app=angular.module('myApp.route',[]);
    app.config(function ($routeProvider) {
        $routeProvider
            // .when('/movie',{
            //     templateUrl:'./template/movieList.html',
            //     controller:'movieList'
            // })
            .when('/home',{
                templateUrl:'./template/home.html',
                controller:'home'
            })
            .when('/movie/:type/:page?',{
                templateUrl:'./template/movieList.html',
                controller:'movieList'
            })
            .when('/movieDetail/:id',{
                templateUrl:'./template/movieDetails.html',
                controller:'movieDetail'
            })
            .when('/comments/:id/:type',{
                templateUrl:'./template/movieComments.html',
                controller:'movieComments'
            })
            .when('/book/search/:page?',{
                templateUrl:'./template/bookList.html',
                controller:'bookList'
            })
            .when('/bookDetails/:id',{
                templateUrl:'./template/bookDetails.html',
                controller:'bookDetails'
            })
            .otherwise('/home')
    })
})(angular)