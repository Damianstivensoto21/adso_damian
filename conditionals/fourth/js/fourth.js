/*
	Name exercise:fourth
	Description:The exercis is about calculate the final grades.
	Autor:Damian stiven soto guevara
	Date: 15th march 2025
*/
let gradeOne = 5.0;
let gradeTwo = 4.0;
let gradeThree = 3.0;
let gradeFinal;
gradeFinal = (gradeOne * 0.20) + (gradeTwo * 0.35) + (gradeThree * 0.45);

console.log("The final grade is: "+ gradeFinal);

if (gradeFinal >= 4.5){
	console.log("Top grade");}
else if (gradeFinal < 4.5 && gradeFinal >=3.5){
	console.log("Good grade");}
else if (gradeFinal < 3.5 && gradeFinal >=3.0){
	console.log("Regular grade")}
else{
	console.log("Bad grade")}