function showStringpropertiesObject(check){
    for(let key in check){
        if(typeof(check[key])==='string'){
            console.log(key +" :"+check[key]);

        }
    }
}
const person={
    name: 'shilpa',
    age: 21,
    height: 4.9,
    country: 'India',
    Designation : 'Developer'
}
console.log(showStringpropertiesObject(person))