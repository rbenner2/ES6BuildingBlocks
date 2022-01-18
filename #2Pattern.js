import readlineSync from 'readline-sync';
//input
let nRows = readlineSync.question("How many rows? ");

// n counting down
for(let n = nRows; n > 0; n = n - 1){
   // console.log("I love Vivas ... please buy some");
   console.log("#".repeat(n));
}