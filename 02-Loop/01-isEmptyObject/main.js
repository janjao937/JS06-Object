/*ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่  
ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง*/

let objectChecking=(object)=>{
   
    for(let key in object)
    {
       return false;//not empty
    }
    return true;//Empty
}

const temp={
    fileCount :100,
    isEmpty : false,
}
const temp2={
 
}
console.log(objectChecking(temp2))