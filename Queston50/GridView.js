var months=document.getElementsByClassName("months");
var i;
function listView(){
    for(i=0;i<months;i++){
        months[i].style.width="100%";
    }
}
function GridView(){
    for(i=0;i<months;i++){
        months[i].style.width="50%";
    }
}
var container=document.getElementById("btnContainer")
var btns=container.getElementsByClassName("btn");
for(var i=0;i<btns.length;i++){
    //console.log(btns[i])
   btns[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active")
       // console.log(current)
        current[0].className=current[0].className.replace("active"," ")
        this.className+="  active";
    })
 }