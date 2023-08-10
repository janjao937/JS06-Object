/*
ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
คูณเฉพาะ value ที่เป็น number เท่านั้น


```js
// before 
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};


// after call function multiplyNumeric(menu, 3)
menu = {
  width: 600,
  height: 900,
  title: 'My menu'
};
```*/

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

const multiplyNumberic=(obj,num)=>
{
    for(let i in obj)
    {
        if(isNaN(obj[i]))
        {
            continue;
        }

        obj[i]*=num;
    }
}


console.log(multiplyNumberic(menu,3));
console.log(menu);

///Teacher Code///
const teacherMultiplyNumberic=(obj,num)=>
{
    for(let i in obj)
    {
        if(typeof obj[i]!=="number")
        {
            continue;
        }
        obj[i]*=num;
    }
}
