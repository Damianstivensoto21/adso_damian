/*
	Name exercise:exercise_5times_table
	Description:the  exercise is about calculate 5 times table 
	Autor:Damian stiven soto guevara 
	Date: march 15th 2025
*/

let number = 5;
let product = 1;
let counter = 1;

while (counter <= number) {
    product = number * counter;

    console.log(number + " X " + counter + " = " + product);
    counter++;
}
