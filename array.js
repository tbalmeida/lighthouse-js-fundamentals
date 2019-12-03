/* 
var udaciFamily = ["Julia", "James","Thiago"]

console.log( udaciFamily[0] );
console.log( udaciFamily[1] );
console.log( udaciFamily[2] ); 
*/

/*
 * Programming Quiz: Building the Crew (6-2)
Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . 
You don't need to type out the actual strings, just use the provided variables.
 
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

 let crew = [captain, second, pilot, companion, mercenary, mechanic];

 for (i=0; i <=  crew.length-1; i++){
   console.log( crew[i] );
 }

 */

 /*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 *

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach( function(value, index ) {
    if ( value % 3 === 0){
      console.log("Adding 100 to item " + index + ", value " + value);
      test[index] += 100; 
    }
} );

console.log( test );
*/

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 *

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map( function(bill) {
  bill = bill * 1.15;
  return Number(bill.toFixed(2));
} );

console.log( totals );
*/

/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 *

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3], [34, 2, 1, 553, 23, 4, 66, 23, 4, 55], [67, 56, 45, 553, 44, 55, 5, 428, 452, 3], [12, 31, 55, 445, 79, 44, 674, 224, 4, 21], 
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5], [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424], [74, 532, 6, 7, 35, 17, 89, 43, 43, 66], [53, 6, 89, 10, 23, 52, 111, 44, 109, 80], 
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8], [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]];

  for ( R = 0; R < numbers.length; R ++){
    for ( c = 0; c < numbers[R].length; c++ ){
      if ( numbers[R][c] % 2 === 0){
        numbers[R][c] = "even";
      } else {
        numbers[R][c] = "odd";
      }
    }
  }

  console.log (numbers);
  */

 const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
 console.log(iceCreamFlavours);

 iceCreamFlavours.push("root beer");
 console.log(iceCreamFlavours);