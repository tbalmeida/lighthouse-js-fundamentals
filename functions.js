/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */
/*
var laugh = function(qty){
  let vRet = ""
  for (var count = 1; count <= qty; count++){
    vRet += "ha";
  }
  return(vRet + "!");
}

console.log(laugh(10));

*/

/*
 * Programming Quiz: Cry (5-5)
 */
/*
  var cry = function scary() {
  return "boohoo!";
}
// your code goes here
console.log(cry());
*/



/*
 * Programming Quiz: Inline Functions (5-6)
  Directions:
  Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an 
  inline function expression instead.
  emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
      Prints: "I am happy, haha!"
 */

// don't change this code
/*function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
  var string = "";
  for ( var i = 0; i < num; i++ ) {
      string = string+= "ha"
  }
  return string+"!";
});

*/

