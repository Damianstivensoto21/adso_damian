/*
	Name exercise:the exercise Forces for
	Description:the exercise is about calculates a certein amount of forces with different masses and accelerations.
	Autor:Damian stiven soto guevara
	Date: march 15th 2025
*/
let acceleration;
let force;
let bulk;
let limit = parseInt(prompt("Enter the number of forces to calculate:"));
let counter;

for(counter = 1; counter <= limit; counter++){
	bulk = parseInt(prompt(counter + ". Enter the bulk:"));
	acceleration = parseInt(prompt(counter +  ". Enter the acceleration:"));
	force = bulk * acceleration;

	console.log(counter + ". The force is: "+ force);
}
