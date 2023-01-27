// Arrays
let stringArray: string[] = ["hello", "happy", "john"];
let numArray: number[] = [23, 65, 72, 88];
let unionArray: (string | number)[] = ["Hello World", 2334, "I am happy", 98, 66];
let mixedArray: (string | number | boolean)[] = [true, "comapny", 23];


// Tuples
let newTuple: [number, string, boolean] = [23, "never", true];

// objects
// to define your own type you can use either the type (which requires you to equate) or an interface (which does not require you to equate);
interface Person {
    name: string,
    age: number,
    fav: (string | number)[],
    achivements?: string[] // the question mark in front of the property name makes it optional;
} 

const samuel: Person = {
    name: "Afolabi samuel",
    age: 16,
    fav: ["eminem", 777]
}

function greetPerson (person: Person){
    return `Hello ${person.name}`
}

// Enums

enum Grade{
    F,
    E,
    D,
    C,
    B,
    A
}

console.log(Grade.A)