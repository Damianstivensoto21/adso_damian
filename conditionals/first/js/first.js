/*
	name exercise:first
	description:the exercise is about compare the areas of three squares.
	Autor:Damian stiven soto guevara.
	Date: 15th march 2025
*/

let squareOne = 4;
let squareTwo = 2;
let squareThree = 6;

let areaOne;
let areaTwo;
let areaThree;
areaOne = squareOne*squareOne;
areaTwo = squareTwo*squareTwo;
areaThree = squareThree*squareThree;

if (areaOne == areaTwo && areaTwo == areaThree) {
	console.log("All areas are equal");
}
else if (areaOne > areaTwo && areaOne > areaThree) {
	console.log(areaOne+ " is greater");
}
else if (areaTwo > areaOne && areaTwo > areaThree) {
	console.log(areaTwo+ " is greater");
}
else if (areaThree > areaOne && areaThree > areaTwo) {
	console.log(areaThree+ " is greater");
}
else if (areaOne == areaThree && areaOne > areaThree) {
	console.log(areaOne+ " and " +areaTwo+ " are greater")
}
else if (areaOne == areaThree && areaOne > areaTwo) {
	console.log(areaOne+ " and " +areaThree+ " are greater")
}
else {
	console.log(areaTwo+ " and " +areaThree+ " are greater")
}