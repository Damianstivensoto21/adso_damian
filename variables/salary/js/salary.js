/*
  name exercise:salary exercise 
  description:calculate the salary  
  autor:damian  stiven soto 
  date: 15th march 2025
*/

let salary;
let daysWorked=30;
let valueDay=32.000;
let descount;
let health;
let arl;
let netSalary;

salary=daysWorked*valueDay;

health=salary*0.12;

arl=salary*0.052;


pension=salary*0.16;

discount=health + pension + arl;

netSalary=salary-discount;




console.log("the salary is:"+ salary  );
console.log ("the pension is :" + pension);
console.log("the health is:"+ health  );
console.log ("the descount is :" + discount);
console.log ("the netSalary is :" + netSalary);
