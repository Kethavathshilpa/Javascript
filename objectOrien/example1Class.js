//CLASS DECLARATION

class Employee{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    details(){
        console.log(this.id+ " "+this.name);
    }
}
//creating object and passing the values
var e1=new Employee(101,"martin roy");
var e2=new Employee(102,"Duke William");
//calling the methods using object
e1.details();
e2.details();


//class Hoisting 
// class Employee{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
//     details(){
//         console.log(this.id+" "+this.name)
//     }
// }