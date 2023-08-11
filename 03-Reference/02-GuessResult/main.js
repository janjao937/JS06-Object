const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); 

//false
//เพราะ เป็น referance type ทำให้ตัวแปรจะอ้างอิงไปที่ Address memory คนละที่กัน