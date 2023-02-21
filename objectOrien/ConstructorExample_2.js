
//creating constructor
/*class Employee{
    constructor(){
        this.id=101;
        this.name="martin roy";
    }
}
var emp=new Employee();
console.log(emp.id+" "+emp.name);*/



//using super keyword

class companyName{
    constructor(){
        this.company="TCS";
    }
}
class Employee extends companyName{
   
    constructor(id,name){
    super();
    this.id=id;
    this.name=name;
    }
}
var emp=new Employee(1,"john");
console.log(emp.id+" "+emp.name+ " "+emp.company)