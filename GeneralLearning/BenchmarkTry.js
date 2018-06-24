var x="42";
Benchmark("coercion test",function(){

    add("implicit",function () {
        let y = x / 2;
    });

    add("parse int",function () {
        let y = parseInt(x,0)/2;
    });

    add("Boxing",function () {
        let y = Number( x )/2;
    });

    add("unary +",function () {
        let y = +x/2;
    });
    add("| unary",function () {
        let y = (x | 0) / 2;
    });
});
console.log("hi done!")