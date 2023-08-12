//Input

// let name="Banana";
// let quantity = 10;
// let price = 500_000;
// let discount = 0.1;

let name=prompt("Enter Product Name");
let quantity = prompt("Enter Quantity");
let price = prompt("Enter Price");
let discount = prompt("Enter Discount");

//createObject

//property shothand ใช้ได้เมื่อ property มีชื่อเดียวกับ ตัวแปร
const products = {
    name ,
    quantity,
    price ,
}
if(discount != 0) products["discount"] = discount;

//calculate price
let calculateTotalPrice = (product)=>
{
    //price * quantity * (1-discount)
    //100*10*(1 - 0.1) => 1000(0.9) => 900          //products.discount || 0  ถ้าไม่ใช่ตัวเลขจะ return 0
    return products.price * products.quantity * (1 - (products.discount || 0));

}

let result = calculateTotalPrice(products);
console.log(result);