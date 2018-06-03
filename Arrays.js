"use strict";
function cloneArray(arr){
    let new_arr=[];
    arr.forEach(function addToNewArr(x) {
        new_arr.push(x);
    });
    return new_arr;
}

var arr=[];
var x;

function cloneWithGen(arr){
    var it = addToArr();
    it.next();
    for(let i=0;i<arr.length;i++){
        it.next(arr[i]);
    }
}

function *addToArr(){
    while(true){
        let x = yield;
        arr.push(x);
        console.log("added ",x);
    }
}

var old_arr=[1,2,3,7,8];

cloneWithGen(old_arr);
console.log(arr);