//Exercise 1:
//Write a function testNum that takes a number as an
// argument and returns a Promise that tests if the
// value is less than or greater than the value 10.

function testNum(num) {
    return new Promise(function testNumPromise(resolve,reject) {
        if(num !==10 && typeof num == typeof 0) resolve(num !== 10);
        else reject("Sorry not valid");
    });
}
let x = testNum(11).then(function (result) {
    console.log(Boolean(result));
    return result;
},
    function (err) {
        console.log(err);
    }).then(function (data) {
    if (!!data === true){throw "NOOO"}
    else {throw "YESSS"}
});


//Exercise 2:
//Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(),
// will take in an array of words and capitalize them,
// and then the second function, sortWords(),
// will sort the words in alphabetical order.
// If the array contains anything but strings,
// it should throw an error.


let st=["a","c","b","f","e"];
makeAllCaps(st).then(sortWords).then(function (arr) {
    console.log(arr);
});
function makeAllCaps(arr) {
    return new Promise(function (resolve,reject) {
        arr.map(function capitalize(x) {
            if(typeof x !== "string")
                throw "Array contains non-string elements!";
            else {x=x.toUpperCase();}
        });
        resolve(arr);
    })
}
function sortWords(pr) {
    return Promise.resolve(pr).then(function (arr) {
        arr.sort((a, b) => a > b);
        return arr;
    });
}