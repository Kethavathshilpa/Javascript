SPEEDLIMIT=70;
KILOMETER=5;
function checkSpeedLimit(speed)
{
    if(speed<=70){
         return "Good and Safe Driving";}
   else{
     let penalitypoint=(Math.floor(speed-SPEEDLIMIT)/KILOMETER);
     console.log(penalitypoint)
    if(penalitypoint<10){
        return "cross the penality point"+" " +penalitypoint;}
    else {
      return 'License suspended';}
   }
}
// let checkSpeed=checkSpeedLimit(40);
// console.log(checkSpeed);
// let checkSpeed1=checkSpeedLimit(80);
// console.log(checkSpeed1);
let checkSpeed2=checkSpeedLimit(120);
console.log(checkSpeed2);


