const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/* FOR version
console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
*/

// WHILE version
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}