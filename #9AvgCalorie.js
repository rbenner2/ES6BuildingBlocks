import readlineSync from 'readline-sync';
let nDay1 = readlineSync.question("Enter your calories for day 1: ");
let nDay2 = readlineSync.question("Enter your calories for day 2: ");
let nDay3 = readlineSync.question("Enter your calories for day 3: ");
let nDay4 = readlineSync.question("Enter your calories for day 4: ");
let nDay5 = readlineSync.question("Enter your calories for day 5: ");
let nDay6 = readlineSync.question("Enter your calories for day 6: ");
let nDay7 = readlineSync.question("Enter your calories for day 7: ");

let nWeeklyAvg = nDay1 + nDay2 + nDay3 + nDay4 + nDay5 + nDay6 + nDay7;
let nWeeklyAvgTotal = nWeeklyAvg / 7;
console.log(`Your weekly avg calorie intake was ${nWeeklyAvgTotal}`);