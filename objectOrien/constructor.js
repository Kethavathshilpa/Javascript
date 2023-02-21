
//creating object directly
// var emp=new Object();
//     emp.id=101;
//     emp.name="Ravi malik";
//     emp.salary=5000;
//     console.log(emp.id+" "+emp.name+" "+emp.salary)

//By using object constructor

// function emp(id,name,salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;
// }
// e=new emp(103,"vimal jaiswal",30000);
// console.log(e.id+" "+e.name+" "+e.salary);

//Defining method 
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;

    this.changesalary=changesalary;

    function changesalary(othersalary){
        this.salary=othersalary;
    }

}
e=new emp(103,"shilpa","3000");
e.changesalary(50000);
console.log(e.id+" "+e.name+ " "+e.salary);