///////////////////////////////////////
// coding challenge #2

/*
USe the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI Is higher than Mark's".
2. Use a template literal to include the bmi values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement

GOOD LUCK :)


let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;
let markBMI = (markWeight) / markHeight ** 2;
let jhonBMI = (johnWeight) / johnHeight ** 2;
let markHigherBMI = markBMI > jhonBMI;
console.log(markBMI, jhonBMI);
console.log(markHigherBMI);

if (markBMI > jhonBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${jhonBMI})`)
} else {
    console.log(`John's BMI (${jhonBMI}) is higher than Mark's BMI (${markBMI})`)
}
