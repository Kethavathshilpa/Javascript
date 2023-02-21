const arr=[23 ,2 ,' ', null, false, true];
function checkTruthyValues(checkValues){
let truthycount=0;
for(let value of checkValues){
  if(value){
    truthycount++;
   }
}
return truthycount;
}
console.log(checkTruthyValues(arr));


// const valuesArray = [0, 1, '', undefined, false, true];

// function checkCountTruthyFalsy(curArray) {
//   let truthyCount = 0;
  
//   for (let value of curArray) {
   
//     if (value) {
//       truthyCount++;
//     }
//   }
//   return truthyCount;
// }

// console.log(checkCountTruthyFalsy(valuesArray));
