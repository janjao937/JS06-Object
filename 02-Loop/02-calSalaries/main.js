/*ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  const isEmptyObject=(object)=>
  {
    for(let key in object)//Validate
    {
        return false;
    }
    return true;
  }
  
  const calSalary=(object)=> 
  {
    //validate
    if(isEmptyObject(object)) return 0;
    let allSalary = 0;
    //Calculate
    for(let i in object)
    {
        allSalary += object[i];
    }
    return allSalary;
  }

  console.log(calSalary(salaries));
  