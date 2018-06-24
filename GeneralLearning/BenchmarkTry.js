var x="42";
Benchmark("coercion test",function(){

    add("implicit",function () {
        var y = x / 2;
    });

    add("parse int",function () {
        var y = parseInt(x,0)/2;
    });

    add("Boxing",function () {
        var y = Number( x )/2;
    });

    add("unary +",function () {
        var y = +x/2;
    });
    add("| unary",function () {
        var y = (x | 0) / 2;
    });
});
console.log("hi done!")