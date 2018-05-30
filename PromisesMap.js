/*For example,
    let's consider an asynchronous map(..) utility that takes an array of values (could be Promises or anything else),
    plus a function (task) to perform against each.
map(..) itself returns a promise whose fulfillment value,
 is an array that holds (in the same mapping order) the async fulfillment value from each task.
*/

//polyfill check
if(!Promise.map) {
    Promise.map = function mapPromise(arr, fn) {
        arr.map(function (x) {
            return new Promise(function (resolve) {
                resolve(fn(x));
            });

        });
        return Promise.all(arr);
    }
}
var p1 = Promise.resolve( 21 );
var p2 = Promise.resolve( 42 );
//var p3 = Promise.reject( "Oops" );


Promise.map([p1,p2],function (x){
    Promise.resolve(x).then(function (dta){
        return dta * 2;
    }).then(function res(data) {
        console.log(data);
    });
});




