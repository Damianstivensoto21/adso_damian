/*
	Name exercise:1 to 5_times tables
	Description:the exercise calculate and show 1 to 5 times tables, also counts even and odd numbers and show, when a number is 	pair it says "buzz" and in case the number its inpair, says bass
	Autor: Damian stiven soto  guevara.
	Date: march 15th 2025
*/

let even = 0;
let odd = 0;

let bassOrBuzz;
let counterOne;

let counterTwo;
let product;

for(counterOne=1; counterOne<=5; counterOne++){
	for(counterTwo = 1; counterTwo<=5; counterTwo++){
		product= counterOne * counterTwo;

		if(product%2 == 0){
			bassOrBuzz = "buzz";
			even = even +1; }
		else{
			bassOrBuzz = "bass";
			odd = odd + 1; }
		console.log(counterOne + " X " + counterTwo + " = " + product + ", "+ bassOrBuzz);}
}


console.log("There's " + even + " even and there's " + odd + " odd numbers");

		