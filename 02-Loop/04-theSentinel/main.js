/*
ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด   
และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา*/



let key = "";
let value = "";

let obj={};
let isContinue = true;

while(isContinue)
{
    key = prompt("Enter fruit");
    if(key === "stop"){
        isContinue =false;
        break;
    }
    value = prompt("Enter Quatity");
    if(value === "stop")
    {
        isContinue =false;
        break;
    }

    obj[key] = +value;
    console.log(`${obj[key] }` );
}