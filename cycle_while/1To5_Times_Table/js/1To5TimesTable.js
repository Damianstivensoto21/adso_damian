/*
	Name exercise:exercise_1to5_times_table
	Description:the exercise is about calculate 1 to 5 times tables and if the number is pair says buzz, but if its inpair says bass.
	Autor:Damian stiven soto guevara
	Date: march 20th 2025
*/

let product;
let even = 0;
let odd = 0;

let counterOne= 1;
let counterTwo;
let bassOrBuzz;

while(counterOne <= 5) {
    counterTwo= 1; 
    while (counterTwo <= 5) {
        product = counterOne * counterTwo;

        if (product % 2 == 0) {
            bassOrBuzz = "buzz";
            even = even + 1;
        } else {
            bassOrBuzz = "bass";
            odd = odd + 1;
        }
        console.log(counterOne + " X " + counterTwo + " = " + product + ", " + bassOrBuzz);

        counterTwo++;
    }
    counterOne++;
}

console.log("There's " + even + " even and there's " + odd + " odd numbers");
