require.config( {
    baseUrl: '/public/',
    paths: {
        // 插件模块
        jquery: 'assets/jquery/jquery.min',
        cookie: 'assets/jquery-cookie/jquery.cookie',
        template: 'assets/artTemplate/template',
        progress: 'assets/nprogress/nprogress',
        bootstrap: 'assets/bootstrap/js/bootstrap.min',
        ztree: 'assets/zTree/js/jquery.ztree.all',

        // 自定义模块
        utils: 'utils/utils',
        common: 'src/common',
        home:'src/home/home',
        works:'src/works/works',
        about:'src/about/about',
        blog:'src/blog/blog'

    },
    shim: {
        bootstrap: {
            deps: [ 'jquery' ]
        },
        ztree:{
            deps:['jquery']
        }
    }
} );