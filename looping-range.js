/*
function range( start, end, step ){
  let vArray = [];
  if ( start < end && step > 0 ){
    for ( i = start; i <= end; i += step ){
      vArray.push( i );
    } 
  } 
  return vArray;
}

var myArray = range( 2, 5, 1);

console.log( myArray );

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/

/* Looping - lastIndexOf


Define a function lastIndexOf.

When this function is given an array and a value, it should return the index of the last time the value occurs in the array. 
If the value never occurs, the function should return -1.
*/

function lastIndexOf( pArray, pItem ){
  let ret = -1;
  for ( i = pArray.length - 1; i >= 0; i-- ){
    if ( pArray[i] === pItem ){
      ret = i;
      break;
    }
  }
  return ret;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);