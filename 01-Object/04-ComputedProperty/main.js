/*
ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password  
ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา*/

const getUserInput=(userName,email,password)=>
{
    //prop shot hand
    const user={
        userName,
        email,
        password,
    }
    return user;
}
let userName = prompt("Enter UserName");
let email = prompt("Enter email");
let password = prompt("Enter password");

console.log(getUserInput(userName,email,password));
//console.log(getUserInput("JO","email","password"));