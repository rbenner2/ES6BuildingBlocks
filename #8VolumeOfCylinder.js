//8. Write a program to calculate the volume of a cylinder. The user enters in the diameter of the end of the circle, and the height in meters:

//volume = pi * r ** 2 * height 

//Input the radius and height
//Output the radius and height as they were input
//Output the volume of the cylinder

//##### Sample Output

//```
//radius >4
//height >4
//the volume is 201 cubic meters
//```

import readlineSync from 'readline-sync';
let nRadius = readlineSync.question("Enter a radius for the cylinder: ");
let nHeight = readlineSync.question("Enter a height for the cylinder: ");

let pi = 3.14159265359;
let volume = pi * nRadius ** 2 * nHeight 

console.log(`radius >${nRadius}`);
console.log(`height >${nHeight}`);
console.log(`the volume is ${volume} cubic metres`)

