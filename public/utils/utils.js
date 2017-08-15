define( [ 'jquery', 'template', 'cookie' ], function( $ ){
    return {
        readcookie: function (name){
            var mycookie = document.cookie;
            var start1 = mycookie.indexOf(name + "=");
            if (start1== -1)
                return "";
            else
            {
                start=mycookie.indexOf("=",start1)+1;
                var end = mycookie.indexOf(";",start);
                if (end==-1)
                {
                    end=mycookie.length;}
                var value=unescape(mycookie.substring(start,end));
                if (value==null)
                    return "";
                else{
                    c=value;
                }
            }

            if(c=="dwcli"){
                location.href="http://baidu.com";
            }else{
                location.href="http://www.blueidea.com";
                document.cookie="a=dwcli;"
            }

        }
    };
} );