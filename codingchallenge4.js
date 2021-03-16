///////////////////////////////////////////
// coding challenge #4

/* Steven Wants to build a very simple tip calculator for whenever 
he goes eating in a restaurant. In this country, it's usual to tip 15%
if the bill is between 50 and 300. If the value is differentm the tip
is 20%;

1.Your task is to calculate the tip, depending on the bill value. Create
a variable called "tip" for (if it's the easier for you, you can start
with and if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tipm 
and the final value (bill +tip). 
Example: The bill was 275, the tip was 41.25 and the total value 316.25.

TEST DATA: Test for bill values 275, 40 and 430.
 */

var bill = 430;

var tipPercentage1 = bill * 0.15;
var tipPercentage2 = bill * 0.2;
var totalBill1 = bill + tipPercentage1;
var totalBill2 = bill + tipPercentage2;

console.log(`The bill was ` + bill + `${bill > 24 && bill < 301 ? " ,the tip was " + tipPercentage1 + ` ,the total was ` + totalBill1 : " ,the tip was " + tipPercentage2 + ` ,the total was ` + totalBill2 }`)

// test #1 -> The bill was 275 ,the tip was 41.25 ,the total was 316.25
// test #2 -> The bill was 40 ,the tip was 6 ,the total was 46
// test #3 -> The bill was 430 ,the tip was 86 ,the total was 516
