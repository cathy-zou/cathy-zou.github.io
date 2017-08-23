define(['My97DatePicker'],function () {
    console.log(1);
    WdatePicker({
        eCont:'date',
        onpicked:function(dp){
            alert('你选择的日期是:'+dp.cal.getDateStr())
        }
    })
    console.log(2)
})