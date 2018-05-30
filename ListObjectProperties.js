"use strict";
var obj = {
    name:"MyObj",
    age:1,
    size:10
};

list_object_properties.call(obj)

function list_object_properties() {
    Object.keys(this).forEach(function list_properties(x) {
        console.log(x);
    })
}