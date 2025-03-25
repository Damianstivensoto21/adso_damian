/*
	Name exercise:exercise_tension of a rope
	Description:the exercise is about calculate certain amount of tensions of different masses in a rope
	Autor:Damian stiven soto guevara 
	Date: 16th march 2025
*/

let counter;
let bulk;
let tension;
const gravity = 9.8;


let number = parseInt(prompt("Enter number of tension calculate:"));

for(counter= 1; counter <= number; counter++){
	bulk= parseInt(prompt(counter + ". Enter the mass:"));

	tension = bulk * gravity;

	console.log(counter + ". The tension of the rope is: "+ tension + " when the mass is: "+ mass);
}