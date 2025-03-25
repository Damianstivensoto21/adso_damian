/*
	Name exercise:Friction _force
	Description:the exercise is about calculate el friction force applied in different masses and the same friction coeficient.
	Autor: Damian stiven soto guevara 
	Date: 17th march 2025
*/

let counter;

const gravity = 9.8;

let normalForce;
let frictionForce;
let bulk;

let number = parseInt(prompt("Enter number of bulk to enter:"));

let frictionCoefficient = parseInt(prompt("Enter the friction coefficient:"));

for(counter = 1; counter <= number; counter++){
	bulk = parseInt(prompt(counter + ". Enter the bulk:"));
	
normalForce = bulk * gravity;
	
frictionForce = normalForce * frictionCoefficient;
	
console.log(counter + ". The friction force is: " + frictionForce + " when the mass is "+ bulk);
}	