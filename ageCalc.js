/*
Define a function called ageCalculator. This function should take 3 parameters:

    name – a string representing someone's name
    yearOfBirth – a number representing their year of birth
    currentYear – a number representing the current year

The ageCalculator function should return a string explaining how old the person is. 
For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.

"Suzie is 32 years old."
*/

function ageCalculator( name, yearOfBirth, currentYear){
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log( ageCalculator("Geb", 1977, 2019) );