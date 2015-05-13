//转换时间字符串
function getNowDateString(){
    var tempDate=new Date();
    var regex=/\//g;
    return((tempDate.toLocaleDateString()+' '+tempDate.toLocaleTimeString().slice(2)).replace(regex,'-'));
}