"use strict";
var chars_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var books_arr = (function createThreeBooksArray() {
    let arr=[];
    for (let i=0;i<3;i++){
        arr.push(createBook(chars_list.slice(Math.floor(Math.random()*Math.floor(chars_list.length))),chars_list.slice(Math.floor(Math.random()*Math.floor(chars_list.length)))));
    }
    return arr;
})();

console.log(bubbleSortBooks(books_arr));

function createBook(title,author){
    let book = Object.create(null);
    book.title=title;
    book.author=author;
    book.libID = Math.floor(Math.random()*Math.floor(9999));
    return book;
}
function bubbleSortBooks(books){
    let is_sorted=false;
    while(!is_sorted) {
        is_sorted=true;
        for (let i = 0; i < books.length-1; i++) {
            if (books[i].libID > books[i+1].libID) {
                let tmp_book = books[i];
                books[i] = books[i+1];
                books[i+1] = tmp_book;
                is_sorted=false;
            }
        }
    }
    return books;
}