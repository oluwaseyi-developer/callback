/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) {

    if(cb === undefined) {
        smallestNum = array[0];
        for(let i = 1; i < array.length; i++) {
            let nextNum =array[i];

            if(nextNum < smallestNum) {
                smallestNum = nextNum;
            }
        }
        return smallestNum;
    } else {
        smallestNum = array[0];
        for(let i = 1; i < array.length; i++) {
            let nextNum =array[i];

            if(nextNum < smallestNum) {
                smallestNum = nextNum;
            }
        }
        return cb(smallestNum);
    }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
