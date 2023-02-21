function greet(){
     console.log('hello')
 }
 setTimeout(greet,2000)

 //with parameter

 function greet(name){
    console.log("hello "+name);
 }
 setTimeout(greet,1000,"Shilpa");