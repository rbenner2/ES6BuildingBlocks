import readlineSync from 'readline-sync';

//function to decode 1 character
let decodeCharacter = (nChar)=>{
    let sAlphabet = "abcdefghijklmnopqrstuvwxyz"
    return sAlphabet[nChar - 1];
}

//input

let nInput = readlineSync.question("Enter your code: ");

//processing
let sOutput = " ";
for(let n = 0; n < String(nInput).length; n = n +1 ){
    sOutput = sOutput + decodeCharacter(String(nInput)[n]);
}

console.log(sOutput);