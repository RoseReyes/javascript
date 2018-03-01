var amt = 10000;
var penny = 0.01;
var totalAmt = 0;

for(var counter = 1; counter <= 30; counter *= 2) {
    penny = penny * counter;
    totalAmt = penny + amt;

}
console.log(totalAmt);
