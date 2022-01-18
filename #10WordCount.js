//Write a program with a function that accepts a string as an argument and returns the number of words that the string contains.

import readlineSync from 'readline-sync';
let string = readlineSync.question("Enter a string ");

function countWords(str) {
    return str.trim().split(/\s+/).length;
  }

  const nWords = countWords(string);

console.log(`the sentence contains ${nWords} words`)
