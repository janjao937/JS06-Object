//Object Clone

const todo={
    task:"Do HW",
    due_date :"13-8-2023",
    complete:false,
}


const newTodo = {}
//Before Clone
console.log(newTodo);

//Clone
//เอาต้นแบบมา Loop แล้ว assing ลงไปใน key
for(let key in todo)
{
    newTodo[key] = todo[key];
}

//After Clone
console.log(todo);
console.log(newTodo);


//Build in Fuction on Javascript
//object.assing

//Syntax : Object.assing(destination,src1,src2,src3,...,src n)

const hello= {};

Object.assign(hello,todo);
console.log(todo);
console.log(hello);

let permission1 = {canView:true};
let permission2 = {canEdit:true};

let user = {name :"John",canEdit : false};
console.log(user);

Object.assign(user,permission1,permission2);//Return address ของ destination //ใช้ merge ในการ clone // merge เรียงจาก ขวา ทับ ซ้าย
console.log(user);//name:"John",canEdit :true,canview: true

const Harry={
    talk:"Hello",
    hp:200,
}
    // merge เรียงจาก ขวา ทับ ซ้าย
let a = Object.assign(Harry,user,todo);
console.log(a);