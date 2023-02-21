function isFizzBuzz(num1){
    if(typeof num1 !== 'number'){
        return ('Nan - Not a Number! Please Input Number');}

    if(num1%3===0){
        return 'Fizz';
    }
    else if(num1%5===0){
        return 'Buzz';

    }
    else if((num1%3===0) && (num1%5===0)){
      return 'fizzBuzz'
    }
   
    else 
     return "some odd value";
}
var isfizz=isFizzBuzz(5);
console.log(isfizz);
var isfizz=isFizzBuzz(3);
console.log(isfizz);
var isfizz=isFizzBuzz(6);
console.log(isfizz);
// var isfizz=isFizzBuzz('one');
// console.log(isfizz);