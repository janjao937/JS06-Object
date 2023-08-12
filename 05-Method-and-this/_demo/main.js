//Object === collection of project and/of methods

const devWebsite = ()=>{
    console.log("Dev");
}
const sleep =() => console.log("I'm Working");
const eat =(x)=> console.log("EAT " + x );

const programmer = {
    name:"Banana",
    age:30,
    dev:devWebsite,//methods
    eat,//shot-hand property
    sleep,
}

programmer.dev();
programmer.sleep();
programmer.eat("Banana");

//Alternative syntax
const Cpa={

    name:"SoomBoon",
    
    work:function(){console.log("Working");},
    meeting: ()=>console.log("Meeting"),
    sleep(x=0){ console.log("Sleeping " + x +" Hour")},//shot-hand methods
}

Cpa.work();
Cpa.meeting();
Cpa.sleep(50);


//Mini Lab
const smoke = () =>console.log("smoke");

const HumanObject= {
    sleep:(x=0) => console.log("Sleep " + x + "hr"),
    eat (){console.log("Eat")},//shot-hand methods
    smoke,
    working:function(){console.log("Working")},
}

HumanObject.eat();
HumanObject.sleep(30);

//OOP Intro
const car ={
    brand:"Tesla",
    model:"X",
    drive() {console.log("Drive");},
}

const calculator={
    sum(x=0,y=0){x+y;},
}

//this Keyword
//this หมายถึง ตัวแปรของ Object ที่เรียกใช้
//this ไม่สามารถใช้ใน arrow function ได้ 
const user = {
    name:"Banana",
    age:10,
    sayHi() {console.log("my name is" + this.name);},
    growOld:function(){this.age++},
}


user.sayHi();
user.growOld();
console.log(user.age);

const developer = {
    name:"John",
    dev:function(){console.log("Dev by " + this.name);},
}
developer.dev();

//JS private update on 2022
//Class
class character 
{
  name;
  #money;
  constructor (name,money)
  {
    this.name = name;
    this.#money = money;
  }
}

let a = new character("Banana");//initial object
console.log(a.name);//private return undifined

let screem =() =>
{
    console.log(this?.screeming);
}

name:"Jo"
const userr = 
{
    name:"John",
    screem :() => console.log(this?.name),//Arrow function ไม่สามารถใช้ this ได้เพราะจะ Loose scope ไปที่ตัวแปรของ window

    scr:function(){console.log(this?.name);},
}

//Window จะอยู่นอกสุด

//.Call .Apply .Bind



