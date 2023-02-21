/*class moment extends Date{
    constructor(){
        super();
        
    }}
    var m=new moment()
    console.log("current date:")
    console.log(m.getDate()+" "+m.getMonth()+" "+m.getFullYear())*/

  /*  class Moment extends Date {  
        constructor(year) {  
          super(year);  
        }}  
      var m=new Moment("August 15, 1947 20:22:10");  
      console.log("Year value:")  
      console.log(m.getFullYear()); 
      console.log(m.getMonth()) */

      //custom class
   class Bike{
        constructor(){
            this.company="Honda";
        }
      }
      class Vehicle extends Bike{
        constructor(name,price){
            super();
            this.name=name;
            this.price=price;
        }
      }
      var v=new Vehicle("SHINE",7000);
      console.log(v.company+" "+v.name+" "+v.price);