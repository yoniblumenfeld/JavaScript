function setCircularPrototypeOf(obj1,obj2){
    let handlers = {
        get(target,key,context) {
            if (Reflect.has(target,key,context)){
                return Reflect.get(target,key,context);
            }
            else {
                return Reflect.get(target[Symbol.for("[[Prototype]]")]
                    ,key,context);
            }
        },
        set(target,key,val,context){
                return Reflect.set(target,key,val,context);
        }
    };
    let objp1 = new Proxy(obj1,handlers);
    obj2 = Object.assign(Object.create(objp1),obj2);
    objp1[Symbol.for("[[Prototype]]")] = obj2;
    return {objp1,obj2};
}

let object_1 = {
    name:"object_1",
    foo(){
        console.log("foo: ",this.name);
        this.bar()
    }
},
object_2 = {
    name:"object_2",
    bar(){
        console.log("bar: ",this.name);
    }
};

({objp1:object_1,obj2:object_2} = setCircularPrototypeOf(object_1,object_2));
object_2.foo();
object_1.bar();
object_1.b = 4;
console.log(object_2.b);
object_2.c = 5;
console.log(object_1.c);

console.log("Circularity checked".repeat(5));
