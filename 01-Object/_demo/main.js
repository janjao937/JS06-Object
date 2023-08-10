
///Key:value
//Key = string
//value = T
let user= {
    "firstName" :"Boonyakit",
    lastName : "Kittiviroj",
    isLikeBanana:true,
    say:"Hello",
    "is mobile":"BOBOBOBOBOOBOBO",
};

//.(Dot) ใช้กับ Object เท่านั้น

//Access
console.log(user.firstName + user.lastName + user.isLikeBanana + user.say);
console.log(user.lastName);

//ข้อจำกัด เข้าถึงkey ที่มี space ไม่ได้
console.log(user["is mobile"]);
console.log(user["say"]);
console.log(user.say);

//###Update
user.firstName = "JanOchar"
user.lastName = "Prayut";

console.log(user.firstName+"  "+user.lastName);

user.dancing = true;
//###Add New Key
console.log(user.dancing);

//###Delete
//Syntax : delete object.key

delete user.dancing;

console.log(user);

//###Nested
const employee =
{
    fullName:"John Doe",
    salary:500,
    address:{
        district:"Prayut home",
        province :"Central Of Prayut",
        contry:"Pravit Land",
    }
}

console.log(employee.address.contry);
//console.log(employee.addr);//Undefined
//console.log(employee.addres.province);  //undefined.province

console.log(employee?.address?.contry);
console.log(employee.addr?.contry); // ? คือ ไว้เช็คว่าเป็น Object ไหมคล้าย C#  //Optional chaining

const product=
{
    id:227,
    price:50_000,
    discount:0.05,
};

console.log(product.discount);

//#Check Key
//in operater|syntax:"name" in product
console.log("name" in product);
console.log("price"in product);
product.name = "m150";
console.log("name" in product);
delete product.name;
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("id"));

//Computed key
let pKey = "id";
console.log(product[pKey]);//227
console.log(product.pKey);//Underfined

function ShotHand(name,isLike)
{
    //ถ้าชื่อตัวแปรKey กับ value เหมือนกัน สามารถใส่แบบด้านล่างได้เลย
   const user={
    name,
    isLike,
   }

    /*
    const user =
    {

    }
    */
}