const whichSchool = function(age){

  let school = "";

    if (age < 13){
      school = "Elementary School"
    } else if (age >= 13 && age <= 18){
      school = "Secondary School";
    } else {
      school = "Lighthouse Labs"
    }

    return("I am " + age + "  years old. Which school should I attend?\nYou should go to " + school + ".");
  }

console.log( whichSchool(12));
console.log( whichSchool(18));
console.log( whichSchool(20));