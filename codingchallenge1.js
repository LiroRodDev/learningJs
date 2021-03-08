///////////////////////////////////////////
// coding challenge #1


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John

TEST DATA 1: Marks weights 78kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.

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


let markHeight2 = 1.88;
let markWeight2 = 95;
let johnHeight2 = 1.76;
let johnWeight2 = 85;
let markBMI2 = (markWeight2) / markHeight2 ** 2;
let jhonBMI2 = (johnWeight2) / markHeight2 ** 2;
let markHigherBMI2 = markBMI2 > jhonBMI2;
console.log(markBMI2, jhonBMI2);
console.log(markHigherBMI2);
