/*
	Name exercise:exercise_9Times_table
	Description:the exercise is about calculate 9 times table and say wich number are pair or inpair
	Autor:Damian stiven soto guevara 
	Date: march 20th 2025
*/
let counter=1;
number=9;


while (counter <= 5) {
    let result = number * counter;
    let parity = (result % 2 == 0) ? "par" : "impar";

    console.log(`${number} * ${counter} = ${result} (${parity})`);
    counter++;
}