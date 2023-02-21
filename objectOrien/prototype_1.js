function Employee(firstName, lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
Employee.prototype.fullName=function(){
    return this.firstName+" "+this.lastName;
}
//we can aslo add properties using prototype:
Employee.prototype.company="Javatpoint" ; 
var employee1=new Employee("Martin","Roy");
var Employee2=new Employee("Duke","William");

console.log(employee1.fullName()+" "+employee1.company)

