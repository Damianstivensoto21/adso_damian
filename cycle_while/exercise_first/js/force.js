/*
    Name exercise:exercise_force
    Description:the exercise is about write a bulk and aceleration for calculate the force, calculate the total and end if bulk or aceleration is negative
    Author:Damian stiven soto guevara
    Date: March 20th 2025
*/

let bulk = 0;
let force = 0;

let acceleration = 0;
let totalForce = 0;
let counter = -1;
while (bulk >= 0 && acceleration >= 0) {
    counter++;
    bulk = parseFloat(prompt("enter the bulk (negative to exit): "));
    if (bulk < 0) {
        break;
    }
    acceleration = parseFloat(prompt("enter the acceleration (negative to exit): "));
    if (acceleration < 0) {
        break;
    }
    force = acceleration * bulk;
    totalForce += force;
    console.log("Force: " + force);
}

console.log("The total forces: " + totalForce);

console.log("Number of procedures: " + counter);
