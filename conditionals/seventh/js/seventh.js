
/*
	Name exercise: seventh
	Description:the exercise is about calculate the friction of an object on a surface
	Autor:Damian stiven soto guevara
	Date: 15th march 2025
*/
let bulk = 4;
let frictionForce;
let frictionCoefficient = 0.5;
let gravitationalAcceleration = 9.8;

frictionForce = frictionCoefficient * bulk * gravitationalAcceleration;

console.log("The friction force is: "+ frictionForce);

if (frictionForce < 50) {
	console.log("The friction is low");
}
else {
	console.log("The friction is high");
}