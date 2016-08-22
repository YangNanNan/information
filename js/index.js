/**
 * Created by YangNannan on 2016/8/21.
 */
//    tab切换
var a = document.getElementById("tab");
var lis = a.getElementsByTagName("li");
var divs= document.getElementsByClassName("list1-content");
for(var i=0;i<lis.length;i++){
    lis[i].odiv=i;
    console.log(i);
    lis[i].onclick=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
            divs[j].className="list1-content";
        }
        this.className="active";
        divs[this.odiv].className="list1-content block";
    }
}
//跳转二级页面
