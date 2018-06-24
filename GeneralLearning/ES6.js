"use strict";
//Showing some meta programming functionalities

//Re-defining object's (array in this case) iterator
//by redefining the function defined in the object's Symbol.iterator
let arr=[1,2,3,4];
arr[Symbol.iterator] = function *() {
 let idx = 0;
 do{
     yield this[idx];

 }while((idx += 1) < this.length);
};
let x="123";
console.log(...x[2]);
for(let i of arr){
    console.log(i);
}

//Redefining object's toStringTag symbol
//resulting in changes of its instance's typeof results
function Foo(greeting){
    this.greeting=greeting;
}

Foo.prototype[Symbol.toStringTag] = "Foo"; //object's tostring will now return [object Foo]
Object.defineProperty(Foo,Symbol.hasInstance,{
    value:(inst)=> {
        return inst.greeting=="hello";
    }
});

let a = new Foo("hello"),
    b = new Foo("world");

b[Symbol.toStringTag] = "HeyBIATCH"; //object's tostring tag will now return [object HeyBIATCH]

console.log(a.toString());
console.log(Foo.prototype.toString());
console.log(String(b));
a instanceof Foo ? console.log("True a of foo"):console.log("false a of foo");
b instanceof Foo ? console.log("True b of foo"):console.log("false b of foo");



//symbol species,with classes

class Cool{
    static get [Symbol.species](){return this;}
    again(){
        return new this.constructor[Symbol.species]();
    }
}

class Fun extends Cool{}

class Awesome extends Cool {
    static get [Symbol.species](){return Cool;}
}
a = new Fun();
b = new Awesome();
let c = a.again(),
    d = b.again();

console.log(c instanceof Fun);
console.log(d instanceof Awesome);
console.log(d instanceof Cool);

//Controlling object's coercion behavior
arr = [1,2,3,4,5];
console.log(`result of arr+10: ${arr+10}`);
arr[Symbol.toPrimitive] = hint => { //chaning the way arr coerces
    if (hint == "default" || hint == "number") {
        return "Mindfuck";
    }
};
console.log(`result of arr+10 after change: ${arr+10}`);