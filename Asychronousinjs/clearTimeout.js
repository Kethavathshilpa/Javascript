function greet(){
    console.log("hello man")
}
const cleartime=setTimeout(greet,1000)
clearTimeout(cleartime)

console.log("hi")