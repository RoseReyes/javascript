//Make a function that copies an array, ONLY accepting the items that are numbers.
//IT SHOULD RETURN A NEW ARRAY

function numOnly(newArray) {
    for (var newArrIdx = 0; newArrIdx < newArray.length; newArrIdx++) {
         if (typeof(newArray[newArrIdx]) === 'number') {
            console.log(newArray[newArrIdx]);
        }
    }
return newArray;
}
numOnly([1, "apple", -3, "orange", 0.5]);

// //Remove the numbers from the original array
// function numOnly(newArray) {
//     for (var newArrIdx = 0; newArrIdx < newArray.length; newArrIdx++) {
//          if (typeof(newArray[newArrIdx]) === 'number') {
//             console.log(newArray[newArrIdx]);
//         }
//     }
// return newArray;
// }
// numOnly([1, "apple", -3, "orange", 0.5]);