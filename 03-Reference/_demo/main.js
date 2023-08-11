const log = console.log;
//value type = primitive

let messsage = "Hello";
//Copy by value
let word = messsage;

log(messsage);
log(word);

messsage  = "HI";
log(messsage);
log(word);


//reference referance type = non-primitive

//จะเป็นการอ้างอิงที่อยู่(Address memory) ของ "John" แต่ในตัวแปรจะเก็บ  Address memory เช่น 00FFAA
//  user => "John" <= employee

let user ={
    name:"John",
}
//copy by referance //การบอกที่อยู่ให้กับอีกตัวแปร
let employee = user;

employee.name = "Jane";
log(employee);
log(user);
user.name = "Doe";
log(employee);
log(user);


let a ={};
let b = a;
let d = {};


console.log(a===d);//ใช้ Address ในการเทียบเลยเป็น false แม้ค่าข้างในจะเหมือนกัน
console.log(a===b);
