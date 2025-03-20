/*
  name exercise:gunRecoil
  description:the gunRecoil is calculated
  autor:damian  stiven soto 
  date: 15th march 2025
*/
let gunbulk=3;
let bulletbulk=0.3;
let bulletvelocity=300;
let recoilvelocity;

recoilvelocity=(bulletbulk*bulletvelocity)/gunbulk;

console.log("the gunRecoil is :" + recoilvelocity);
