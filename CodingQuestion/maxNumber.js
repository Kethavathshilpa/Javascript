function maxNumber(num1,num2){
if(num1>num2){
    console.log(num1)
}
else{
    console.log(num2)
}

//using ternay operator

a=num1>num2 ?num1 :num2;
console.log(a);

//using if shorthand
if (num1>num2) 
       return num1
else   return num2;
}
let max=maxNumber(10,30);
console.log(max);
// let max1=maxNumber(40,56);
// console.log(max1)