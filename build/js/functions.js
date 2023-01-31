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
