"use strict";
let stringNumberArray = ["string", 233,];
// Literal Types
let userName;
userName = "Excel";
// Functions 
const add = (a, b) => {
    return a + b;
};
// void meaning none instead of using null or undefined
const logmesg = (message) => {
    console.log(message);
};
const multiplyNum = (a, b) => {
    return a * b;
};
const addNum = function (a, b) {
    return a + b;
};
// Optional parameters
const optional = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default Parameters
const defaultParams = (a, b, c = 5) => {
    return a + b + c;
};
// REST 
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logmesg(total(1, 2, 3, 4)); // output ---> 10
// NB:
// When you use "REST" params you pass them as an array of whatever type you choose; 
// The "never" type (not that popular)
// This is for functions that explicitly throw errors
const errorMsg = (msg) => {
    throw new Error(msg);
};
// It also applies to functions that retuns an infinite loop
// typescript automatically inferes the type when you hover on the function
const infiniteExp = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // since typscript helps to infer the types and we notice that our function returns never 
        // it is a good way to help you in your program to notice the error and fix it as we have 
        // done here, now the infered typw is "void"
    }
};
// Custom type guard
const checkType = (value, type) => {
    return typeof value === type ? true : false;
};
const numberOrString = (value) => {
    if (checkType(value, "number"))
        return "number";
    if (checkType(value, "string"))
        return "string";
    return errorMsg("Cannor reach this point");
};
