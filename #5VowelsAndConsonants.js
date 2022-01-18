//Use 2 functions to display the number of vowels and consonants in a string that you prompt the user to enter.

import readlineSync from 'readline-sync';

// program to count the number of vowels in a string

function countVowel(str) { 
    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;
    // return number of vowels
    return count;
}

function countCons(str) { 
    // find the count of vowels
    const countC = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    // return number of vowels
    return countC;
}

// take input
let string = readlineSync.question("Enter a string ");
const vowelResult = countVowel(string);
const consResult = countCons(string);

console.log(`Your sentence has ${vowelResult} vowels and ${consResult} consonants`);
