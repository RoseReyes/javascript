"use strict";
function printRange(startPoint, endPoint, skipAmt) {
    for (var idx = Math.abs(startPoint); idx < Math.abs(endPoint); idx++) {

        if (Math.abs(skipAmt) == "") {
            Math.abs(skipAmt) = 1;
        }
        else if (Math.abs(endPoint) == "") {
            Math.abs(startPoint) = 0;
            Math.abs(endPoint) = Math.abs(startPoint);
        }
        else if (idx == Math.abs(skipAmt)) {
            continue;
        }
        if (idx % Math.abs(startPoint) === 0) {
            console.log(idx);
        }
    }
}
printRange(4,8,1);