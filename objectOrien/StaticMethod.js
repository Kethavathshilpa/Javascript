/*class Test{
    static Display(){
        return "static method is executing throught class name ";
    }
}
console.log(Test.Display());*/

//more than one static method

/*class Test{
    static Display(){
        return "this is 1st static method";
    }
    static Disk(){
        return "this is 2nd static method";
    }
}
console.log(Test.Display());
console.log(Test.Disk());*/

//more than one static method with same name

/*class hello{
    static Display(){
        return "hellow static";
    }
    static Display(){
        return "this is second static with same name";
    }
}
console.log(hello.Display());*/

//static method with the constructor

/*class Test{
    constructor(){
        console.log(Test.display());
        console.log(this.constructor.display());
    }
    static display(){
        return "static method";
    }
}
var t=new Test()*/

//calling (or) invoke static method in  non  static method
class Test{
    static display(){
        return "static method";
    }
    show(){
        console.log(Test.display());
    }
}
var t=new Test()
t.show();