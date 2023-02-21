function Employee(name,age ,baseSalary){
    this.name=name;
    this.age=age;
    this.baseSalary=baseSalary;
//abstraction data is hide  unnecessary data to user
    let monthlybonus=1000;

    let calculateFinalSalary=function(){
        let finalSalary=baseSalary+monthlybonus
        console.log("final Salary="+finalSalary)
    }
    ///
    this.EmployeeDetails=function(){
        console.log('name:'+this.name+ "age: "+ this.age);
        calculateFinalSalary();
    }

}
let emp1=new Employee('john',30,2000);
emp1.EmployeeDetails();
