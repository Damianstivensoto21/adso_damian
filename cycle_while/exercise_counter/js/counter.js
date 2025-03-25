/*
	Name exercise:exercise_counter
	Description:the exercise is about the counter
	Autor:Damian stiven soto guevara
	Date: march 20th 2025
*/

let number=5;
let counter=0;
let acum=0;

while(counter<number){
	counter++;
	acum+=counter;

	console.log(counter);
	if(counter%2==0){
		console.log("is even");
	}
	else{
		console.log("is odd");
	}	

}

console.log("Acumulador:" + acum);