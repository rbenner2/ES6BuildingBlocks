import readlineSync from 'readline-sync';
//input - take distance as km
let nKms = readlineSync.question("How many kms? ");

//output - distance from km converted to miles
let nMiles = nKms * 0.62137;
console.log(`${nKms} kms is equal to ${nMiles} miles`);