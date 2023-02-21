function boxcontainer(name){
    var x;
    x=document.getElementsByClassName("container1");
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    document.getElementById(name).style.display="block";
}