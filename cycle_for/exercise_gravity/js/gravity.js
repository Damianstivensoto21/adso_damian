/*
	Name exercise:exercise_Gravity
	Description:the exercise is about calculate the weight of an object in different planets
	Autor:Damian stiven soto guevara
	Date: march 16th 2025
*/

let gravity;
let counter;
let planet;
let weight;

let bulk =parseInt(prompt("Enter the bulk:"));

for(counter = 1; counter <= 4; counter++){
	if(counter == 1){
		planet = "Earth";
		gravity = 9.8;}

	else if(counter == 2){
		planet = "Mars";
		gravity = 3.7;}

	else if(counter == 3){
		planet = "Jupiter";
		gravity = 24.8;}

	else{
		planet = "Moon";
		gravity = "1.6";}

	weight = bulk * gravity;

	console.log("The weight in "+ planet+ " is: "+weight+ "Kg");
}
	