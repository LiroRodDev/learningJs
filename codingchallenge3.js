 /////////////////////////////////////////////
 // CODING CHALLENGE #3 

/*
 There are two gymnastics teams, dolphins and koalas.
 They compete against each other 3 times. The winner with the highest average score wins the trophy!

 1. Calculate the average score for each team, using the data below
 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
 Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

 3. BONUS 1: Include a requirement for a minimum score of 100 =. With this rule, a team only wins if it has a 
 higher score than the other team, and the same time a score of at least 100 points, HINT: Use a logical operator
 to test for minimum score, as well as multiple else-if blocks.
 4. BONUS 2: Minimum score also applies to a draw! so a draw only happens when both have the same score and both 
 have a score greater or equal 100 points. Otherwise, no team wins the trophy.

 TEST DATA: Dolphins score 96, 108 and 89. Koalas Score 88, 91 and 110
 TEST DATA BONUS 1: Dolphins score 97,112 and 101. Koalas Score 109, 95 and 123.
 TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas Score 109, 95, and 106
*/

console.log("\n/////////////////////PART 1 AND 2///////////////////// \n");
const averageDolphins = Number((96 + 108 + 89)/3);
const averageKoalas = Number((88 + 91 + 110)/3);
console.log(`The Dolphins score average was ${averageDolphins}!`);
console.log(`The Koalas score average was ${averageKoalas}!`);

if(averageDolphins > averageKoalas) {
    console.log(`The Dolphins are the champions!`);
} else if(averageKoalas > averageDolphins) {
    console.log(`The Koalas are the champions!`);
} else if ((averageDolphins === averageKoalas) >= 100) {
    console.log(`There is a draw!`);
}

console.log(`\n /////////////////////BONUS 1/////////////////////\n`)

const averageDolphins2 = Number((97 + 112 + 101)/3);
const averageKoalas2 = Number((109 + 95 + 123)/3);
console.log(`The Dolphins second score average was ${averageDolphins2}!`);
console.log(`The Koalas second score average was ${averageKoalas2}!`);

if(averageDolphins2 < 100) {
    console.log(`The Dolphins Didn't reach the minimum score needed (100).`);
} else if (averageKoalas2 < 100){
    console.log(`The Koalas Didn't reach the minimum score needed (100).`);
}

if (averageDolphins2 && averageKoalas2 < 100){
    console.log(`There are no winner.`)
}

if(averageDolphins2 > averageKoalas2) {
    console.log(`The Dolphins are the champions!`);
} else if(averageKoalas2 > averageDolphins2) {
    console.log(`The Koalas are the champions!`);
} else if ((averageDolphins2 === averageKoalas2) >= 100) {
    console.log(`There is a draw!`);
} 
console.log(`\n /////////////////////BONUS 2/////////////////////\n`)

const averageDolphins3 = Number((97 + 112 + 101)/3);
const averageKoalas3 = Number((109 + 95 + 106)/3);
console.log(`The Dolphins third score average was ${averageDolphins3}!`);
console.log(`The Koalas third score average was ${averageKoalas3}!`);

if(averageDolphins3 < 100) {
    console.log(`The Dolphins Didn't reach the minimum score needed (100).`);
} else if (averageKoalas3 < 100){
    console.log(`The Koalas Didn't reach the minimum score needed (100).`);
}

if (averageDolphins3 && averageKoalas3 < 100){
    console.log(`There are no winner.`)
} 

if(averageDolphins3 > averageKoalas3) {
    console.log(`The Dolphins are the champions!`);
} else if(averageKoalas3 > averageDolphins3) {
    console.log(`The Koalas are the champions!`);
} else if (averageDolphins3 === averageKoalas3) {
    console.log(`There is a draw!`);
} 
