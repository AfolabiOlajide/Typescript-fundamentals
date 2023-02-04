"use strict";
// convert to more or less specific
let newA = "hello";
let newB = newA; // less specific
let newC = newA; // more specific
let newD = "world";
let newE = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string // typescript not happy with the typescast
10; // using unknown for double casting
// The DOM
const img = document.querySelector("img"); // the ! is a non-null assertion
const my_img = document.getElementById("#img"); // using the HTMLImageElement as an assertion exposes the src attributes to the variable
const next_img = document.getElementById("#img"); // you could also use the angle bracket...
img.src;
my_img.src;
