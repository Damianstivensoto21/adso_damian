/*
	Name exercise:exercise_net forces -first Newton's law
	Description:the exercise is about calculate certain amount of net forces and says if the object is accelerating or no.
	Autor: Damia stiven soto guevara
	Date: march 17th 2025
*/
let netforce;
let counter;


let number = parseInt(prompt("Enter number of  net forces to enter:"));

for(counter = 1; counter <= number; counter++){
	netForce = parseInt(prompt(counter + ". Enter a net force:"));
	if(netForce == 0){
		console.log("The object remains at rest or in uniform motion");}
	else{
		console.log("The object is accelerating");}
}