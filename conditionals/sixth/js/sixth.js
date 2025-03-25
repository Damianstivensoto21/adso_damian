

/*
	Name exercise: sixth
	Description: the exercise is about comparison of two bodies in free fall
	Autor:Damian stiven soto guevara
	Date: 15th march 2025
*/
let bulkOne = 6;
let bulkTwo = 7;
let forceTwo;
let forceOne;

forceOne = bulkOne * 9.81;
forceTwo = bulkTwo * 9.81;

if (forceOne > forceTwo) {
	console.log("Bulk one exerts greater gravitational force");
} else if (forceTwo > forceOne) {
	console.log("Bulk two exerts greater gravitational force");
} else {
	console.log("Gravitational forces are equal");
}