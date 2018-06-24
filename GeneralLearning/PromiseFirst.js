//a polyfill
if(!Promise.first){
    Promise.first = function (prs) {
        return new Promise(function (resolve,reject) {
            prs.forEach(function (pr) {
               Promise.resolve(pr).then(resolve).catch(reject);
            });
        });
    };
}


let p1 = new Promise(function (resolve,reject) {
    setTimeout(function p1Timeout() {
        console.log("heyaaa its p1");
        return "p1";
    },1);
});

let p2 = new Promise(function (resolve,reject) {
   setTimeout(function p2Timeout() {
       console.log("heyaa its p2");
       return "p2";
   },1);
});

let p3  = new Promise(function (resolve,reject) {
    setTimeout(function p3Timeout() {
        console.log("heyaa its p3");
        return "p3";
    },1);
});

let p = Promise.first([p1,p2,p3]);
