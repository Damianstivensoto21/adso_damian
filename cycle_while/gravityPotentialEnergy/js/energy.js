/*
	Name exercise:exercise_gravityPotentialEnergy Potential Gravity
	Description:the exercise is about calculate potential energy grativy
	Autor:Damian stiven soto guevara
	Date: march 20th 2025
*/


let bulk;
let height;
let totalEnergy=0;
const gravity=9.81;
let counter=0;

while (true) {
    mass = parseFloat(prompt("Enter the bulk of the object (kg):"));
    height = parseFloat(prompt("Enter the height of the object (m):"));

    if (height < 0) {
        console.log("Program finished.");
        break;
    }

    let gravityPotentialEnergy=bulk * gravity * height;
    totalEnergy += gravityPotentialEnergy;
    counter++;

    console.log(`Potential gravityPotentialEnergy: ${gravityPotentialEnergy.toFixed(2)} J`);
    console.log(`Total gravityPotentialEnergy accumulated: ${totalEnergy.toFixed(2)} J`);
    console.log(`Number of calculations performed: ${counter}`);
}