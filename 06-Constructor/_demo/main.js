//Object creators === Constructor function

function Developer(name,age)//ใน Constructor this จะหมายความว่า Instance 
{
    //Implecit create this = { }

    //this = {} //obj ใหม่
    this.name = name;//{name:name}
    this.age = age//{name:name,age:age}
    this.role = "dev";//{name:name,age:age,role:"dev"}
    this.salary = 40_000;//{name:name,age:age,role:"dev",salary = 40000}
    
    this.sleep=function(){  return `${this.name} is sleep` };
    //Implicit return this
    //return {name:name,age:age,role:"dev",salary = 40000}
}

let john = new Developer("Banana",100);
let jane = new Developer("Jane",500);
console.log(jane.sleep());
console.log(jane);
console.log(john.name,john.age,john.salary);