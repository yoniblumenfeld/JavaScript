var a = 1;
function *fn() {
    while (true) {
        a++;
        yield
    }
}

function incGen(){
    this.next();
    return a;
}
var it = fn();
console.log(incGen.call(it));

//incGen.call(it);
//console.log(a)
