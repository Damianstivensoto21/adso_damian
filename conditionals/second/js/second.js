/*
	Name exercise:second
	Description: the exercise is about determination of age of majority and average age
	Autor:Damian stiven soto guevara
	Date: 15th march 2025
*/


let ageOne = 17;

let ageTwo = 20;

let ageThree = 18;

let average;
if (ageOne >= 18) {
	console.log("The first person is of legal age");
} else {
	console.log("The first person is not legal of age");
}
if (ageTwo >= 18) {
	console.log("The second person is of legal age");
} else {
	console.log("The second person is not legal of age");
}
if (ageThree >= 18) {
	console.log("The third person is of legal age")
} else {
	console.log("The third person is not legal of age");
}

average = (ageOne + ageTwo + ageThree)/3;

if (average >=18 ) {
	console.log("The group is of legal age");
} else {
	console.log("The group is not of legal age");
}