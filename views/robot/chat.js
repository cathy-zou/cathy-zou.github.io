$(function(){
    $('.chat-input input').on('click',function(){
      chat();
        skipTop();
    })
    $(document).on('keydown',function (e) {
        var key = e.which;
        if (key == 13) {
            chat();
            skipTop();
        }
    })
});

function  chat() {
    var val=$('.chat-input textarea').val();
    if(!val){
        return false;
    }
    var myData={val:val}
    var html=template('tmpRight',myData);
    $('.chat-con').append(html);
    $('.chat-input textarea').val('');
    var data={
        "key": "50c6bee830774ee7af9e057c4c2cb352",
        "info": val,
        "userid":"abczz"
    }
    $.ajax({
        url:'http://www.tuling123.com/openapi/api',
        type:'post',
        data:data,
        success:function (res) {
            // console.log(res);
            if(res.code==100000){
                var html=template('tmpLeft',res);
                $('.chat-con').append(html);
            }
            if(res.code==200000){
                var html=template('tmpLink',res);
                $('.chat-con').append(html);
            }
        },
        error:function (res) {
            console.log(res);
            alert('出错了');
        },
        beforeSend:function () {
            // console.log(1);
        }
    })
}
function skipTop(){
    var height=100+$('.chat-con').height()-$('.con-box').height();
    console.log(height);
   if(height<0){
       $('.chat-con').animate({scrollTop:height},500);
   }
    console.log($('.con-box').scrollTop());
}