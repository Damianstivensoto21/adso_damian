/*
	Name exercise:9_times table
	Description:the exercise is about calculate and show the 9  times table to 5 
	Autor:Damian stiven soto guevara
	Date: march 15th 2025
*/
let number = 9;

let product = 1;

let counter = 1;

for(;counter <= 5;counter ++){
    product = number * counter;
    console.log(number + " X " + counter + " = " + product);

    if (product % 2 == 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}
