/*- ให้สร้าง Object calculator ซึ่งมี 3 method 
- read() ให้รับค่า input 2 ค่า
- sum() ให้ return ค่าผลบวกของเลขทั้งสอง
- mul() ให้ return ค่าผลคูณของเลขทั้งสอง*/

let calculator = {
    // ... your code ...
    read:function(){
       // this.num1 = +prompt("Enter number");
        //this.num2 = +prompt("Enternumber");
        this.num1 = 5;
        this.num2 = 10;
    },
    sum:function(){ return this.num1+this.num2;},
    mul:function(){return this.num1*this.num2},
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


//   alert(calculator.sum());
//   alert(calculator.mul());