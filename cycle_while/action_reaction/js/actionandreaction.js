/*
    Name exercise:exercise_action_and_reaction
    Description:the exercise is about  Write a force and calculate the equivalent force, calculate the total and end if the force is 0 and the times of the procedure.
    Author:Damian stiven soto guevara
    Date: March 20th 2025
*/

force = parseFloat(prompt("enter the force (equal to 0 to exit): "));
let counter = -1;
let force = 0;
let equivalentForce;

while (force !== 0) {
    counter++;

    equivalentForce=force*-1;
    totalForce+= force;

    console.log("equivalent Force: " + equivalentForce);

    force = parseFloat(prompt("Write the force (equal to 0 to exit): "));
}

console.log("The total force: " + totalForce);
console.log("Number of procedures: " + counter);

