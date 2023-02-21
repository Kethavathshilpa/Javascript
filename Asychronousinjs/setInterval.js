// function greet(){
//     console.log("hello")
// }
// setInterval(greet,1000)


setTimeout(function run(){
    console.log("hello")
    setTimeout(run,100)
}, 100);

setInterval(function run(){
    console.log("hello")
},100)

function greet(name){
    console.log(`hello ${name}`)
}
function greetVishwas(greetFn){
    const name="shilpa";
    greetFn(name);
}
greetVishwas(greet)


function greet(name){
    console.log(`hello ${name}`)
}
function higherorderFunction(callback){
    const name="shilpa";
    callback(name);
}
higherorderFunction(greet)