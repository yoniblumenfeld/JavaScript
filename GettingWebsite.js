"use strict";
const request = require('request');
const fs = require('fs');
let counter=0;

function getWeDiggitIndex(str) {
    /*
    Getting index of 'wediggit' first appearance
    and returning it.
     */
    console.log(str.match(/wediggit/i).index);
    return str.match(/wediggit/i).index;
}

function getWeDiggitUrl(body) {
    /*
    extracts ad-url from document's body
    */
    let index = getWeDiggitIndex(body);
    let sliced = body.slice(index-500,index+100);
    //console.log(sliced);
    let adurlIndex = sliced.match(/adurl/i).index;
    let sliced2 = sliced.slice(adurlIndex-400,adurlIndex+10);
    let hrefIndex = sliced2.match(/href/i).index;
    let sliced3 = sliced2.slice(hrefIndex,adurlIndex);
    console.log(sliced3.slice(6,-4).replace(/amp/g,"").replace(/;/g,""));
    return sliced3.slice(6,-4).replace(/amp/g,"").replace(/;/g,"");

}
setInterval(()=> {
    /*
        Every 60 seconds, checks 50 times whether wediggit ad upperhands espircom's
        if so, sends a request to a specific url known to be used of the google-ads mechanism.
        if wediggit ad doesn't upperhands ours, the program logs nothing to be done and keeps running.
     */
    counter++;
    try {
        console.log(`main: attempt number: ${counter}`); //logging the start of each attempt
        for (let i = 0; i < 15; i++) {
            request('https://www.google.com/search?q=espircom', (err, res, body) => {
                if (err) {return console.log(err);}
                if (body.toString().toLowerCase().includes('wediggit')){ //checking whether the body includes the string wediggit
                    request(getWeDiggitUrl(body.toString()), (err, res, body) => {
                        if (err) {return console.log(err);}
                        else {console.log(`Wasting clicks ${i}`);}
                    });
                }
                else {console.log(`isAdUpperhanding: false`);}
            });
        }
    }
    catch (err){
        console.log(err);
    }
},60000);
