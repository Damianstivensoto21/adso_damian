/*
	Name exercise:exercise_distance
	Description:the exercise is about alculate how much distance an object travels.
	Autor:Damian stiven soto guevara
	Date: march 20th 2025
*/
let bulk= parseFloat(prompt("Enter the bulk of the object (kg):"));
let force = parseFloat(prompt("Enter the applied force (N):"));

if (force === 0) {
    console.log("The object remains at rest.");
} else {
    let acceleration = 0, velocity = 0, totalDistance = 0;
    let movingTime = 0;

    acceleration = force / bulk;

    while (true) {
        velocity += acceleration * 1;

        let distance = velocity * 1;
        totalDistance += distance;

        movingTime++;

        console.log(`Moving time: ${movingTime} s`);


        console.log(`Current speed: ${velocity.toFixed(2)} m/s`);
        console.log(`Total distance traveled: ${totalDistance.toFixed(2)} m`);
        break;
    }
}