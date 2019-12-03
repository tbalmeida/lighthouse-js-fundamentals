const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let cont = 0;
while (cont <= ingredients.length-1){
  console.log( ingredients[cont] );
  cont++;
}

console.log("\n");

// Write a for loop that prints out the contents of ingredients:
for ( cont = 0; cont <= ingredients.length-1; cont ++ ) {
  console.log( ingredients[cont] );
}

console.log("\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for ( cont = ingredients.length-1; cont >= 0; cont -- ) {
  console.log( ingredients[cont] );
}
