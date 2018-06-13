"use strict";
const request = require('request');

request('https://www.google.com/search?q=espircom', (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.toString().includes("espir.co.il"));
    console.log(body.url);
    console.log(body.explanation);
    console.log(body);
});
