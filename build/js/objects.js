"use strict";
// Arrays
let stringArray = ["hello", "happy", "john"];
let numArray = [23, 65, 72, 88];
let unionArray = ["Hello World", 2334, "I am happy", 98, 66];
let mixedArray = [true, "comapny", 23];
// Tuples
let newTuple = [23, "never", true];
const samuel = {
    name: "Afolabi samuel",
    age: 16,
    fav: ["eminem", 777]
};
function greetPerson(person) {
    return `Hello ${person.name}`;
}
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["F"] = 0] = "F";
    Grade[Grade["E"] = 1] = "E";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
