// 进度条与遮罩层 模块
// by zy
define( [ 'jquery', 'progress' ], function( $, progress ){
    // 加载进度 和 遮罩层效果
    $( document ).ajaxStart( function () {
        progress.start();
        progress.set( 0.2 );
        $('.overlay').show();
    } ).ajaxStop( function () {
        progress.done();
        setTimeout( function () {
            $('.overlay').hide();
        }, 200 );
    } );
} )