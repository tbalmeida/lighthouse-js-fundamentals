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
 */
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