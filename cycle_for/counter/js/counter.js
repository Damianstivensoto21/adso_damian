/*
	Name exercise:the counter for
	Description:the exercise is about counter
	Autor:Damian stiven soto guevara
	Date: march 15th 2025
*/
let number=5;

let acum=0;

let counter;

for(counter=0;counter<=number;counter++){
	
	acum=acum+counter;

	console.log(counter);
	if(counter%2==0){
		console.log("is even");
	}
	else{
		console.log("is odd");
	}	

}
console.log("Acumulador:" + acum);

