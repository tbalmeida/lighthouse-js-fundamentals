/*
Challenge

Define a function called merge

The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.
For example:
code 	                                output
merge([ 4, 5, 6 ],   [ 1, 2, 3, 4 ]); 	[ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ],   [ 2, 5, 8 ]); 	          [ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ],   []); 	            [ 1, 2, 6 ]

*/

function merge( arrayA, arrayB ){
  let ret = [];       // return array
  let iRet = 0;       // index for return
  let iA = 0;         // index for arrayA
  let iB = 0;         // index for arrayB

  while (iRet < arrayA.length + arrayB.length ){
    if ( arrayA[iA] < arrayB[iB] || arrayB[iB] === undefined){
      ret.push( arrayA[iA] );
      iA++;
    } else {
      ret.push( arrayB[iB] );
      iB++
    }

    iRet++;
  }

  return ret;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);