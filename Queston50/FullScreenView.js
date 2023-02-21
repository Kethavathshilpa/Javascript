var element=document.getElementById("imgscreen");
function fullScreen(){
    if(element.webkitRequestFullscreen){
        element.webkitRequestFullscreen();
    }
}