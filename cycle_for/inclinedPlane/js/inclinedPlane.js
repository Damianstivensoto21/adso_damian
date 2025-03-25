/*
	Name exercise:exercise_paralel force
	Description:the is exercise about calculate the paralel force of and object in diferent inclined planes.
	Autor:Damian stven soto guevara 
	Date: 17th march 2025
*/

let counter;
const gravity = 9.8;
let radians;
let paralelForce;

let bulk= parseInt(prompt("Enter the bulk:"));
let startAngle = parseInt(prompt("Enter the start angle:"));
let endAngle = parseInt(prompt("Enter the end angle:"));

for(counter = startAngle; counter <= endAngle; counter++ ){
	radians = counter * (Math.PI/180);
	paralelForce = bulk * gravity * Math.sin(radians);

	console.log("For the angle of "+ counter +" the paralel force is: "+ paralelForce +" N");
}