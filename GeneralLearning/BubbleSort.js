"use strict";
console.log(bubbleSort([-4,0,-2,3,6,4,-3]));

function bubbleSort(arr) {
    let is_sorted=false;
    while (!is_sorted) {
        is_sorted=true;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]; // smarter swap using destructing - ES6
                is_sorted=false;
            }

        }
    }

    return arr;
}
