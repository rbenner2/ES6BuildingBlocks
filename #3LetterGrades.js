import readlineSync from 'readline-sync';
//input
let sGrade = readlineSync.question("Enter your letter grade ");
//select among letter grades
if(sGrade = "A+"){
    console.log("You are between 95-100%");
}else if(sGrade = "A"){
    console.log("You are between 87-94%");
}
else if(sGrade = "A-"){
    console.log("You are between 80-87%");
}
else if(sGrade = "B+"){
    console.log("You are between 77-79%");
}
else{
    console.log("you failed");
};
