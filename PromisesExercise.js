"use strict";

function execute_all() {
    var p = new Promise(function (resolve, reject) {
        resolve(getInput());
        reject("got no input");
    });

    p.then(function getPhoneFulfilled(val) {
        alert(val);
    }, function getPhoneRejected(err) {
        alert(err);
    });

    function getInput() {

        let a = document.getElementById("select-phone");
        a = a.options[a.selectedIndex];

        return a.text;
    }
}
