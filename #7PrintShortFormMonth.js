7. //Write a program that prints the short form for a month given it's proper name. For instance October => Oct.
import readlineSync from 'readline-sync';

let getShortForm = (sMonth)=>{
    let oShortForm = {"January":"Jan","February":"Feb","March":"Mar", "April":"Apr", "May":"May", "June":"June", "July":"July", "August":"Aug", "September":"Sept", "October":"Oct", "November":"Nov","December":"Dec"}
    return oShortForm[sMonth];
}

//input
let sMonth = readlineSync.question("Enter a month: ");
//processing
let sShortForm = getShortForm(sMonth);
//output
console.log(`The short-form of ${sMonth} is ${sShortForm}`);
