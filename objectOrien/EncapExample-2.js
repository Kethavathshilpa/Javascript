/*class Student{
    constructor(){
        var name;
        var marks
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getmarks(){
        return this.marks
    }
    setmarks(marks){
    this.marks=marks;
   }
}
var std=new Student();
std.setName("john");
std.setmarks(78);
console.log(std.getName());
console.log(std.getmarks());*/

//student marks

/*class StudentMarks{
    constructor(){
        var name;
        var marks;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    getMarks(){
        return this.marks;
    }
    setMarks(marks){
    if(marks<0 ||marks>100){

        //alert("invalid marks");
        console.log("invalid marks")
    }
    else{
        this.marks=marks
      }
   }
}
let std=new StudentMarks();
std.setName("shilpa");
std.setMarks(209);
std.setMarks(68);
console.log(std.getName())
console.log(std.getMarks());*/

//prototype based

function Student(name,marks){
    var s_name=name;
    var s_marks=marks;

    Object.defineProperty(this, "name" ,{
    get:function(){
        return s_name;
    },
    set:function(s_name){
        this.s_name=s_name;
    }
    });
    Object.defineProperty(this,"marks",{
        get:function(){
            return s_marks;
        },
        set:function(s_marks){
            this.s_marks=s_marks;

        }
    });
}
var stud=new Student("john", 89)
console.log(stud.name+" "+stud.marks)