// function myDisplayer(some){
//     console.log(some);
// }
// function mycalculator(num1,num2,callback){
//     let sum=num1+num2;
//     callback(sum);
// }
// mycalculator(5,5,myDisplayer)

const MyNumbers=[4,1,-20,-7,5,9,-6]
const posNumber=removeneg(MyNumbers,(x)=>x>=0);
console.log(posNumber)

function removeneg(numbers,callback){
    const myArray=[];
    
    for (const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray
}