//Print each element of the array with each corresponding counter in the loop

var arr =["James", "Jill", "Jane", "Jack"];
function printCountAndName(arr) {
    for (var counter = 0; counter < arr.length; counter++) {
        console.log(counter,arr[counter]);
    }
}
 var printAndCount = printCountAndName(["James", "Jill", "Jane", "Jack"]);