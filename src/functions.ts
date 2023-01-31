// Type Aliases
type StringOrNumber = string | number;
type SNArray = StringOrNumber[];

let stringNumberArray: SNArray = ["string", 233,];

// Literal Types
let userName : "John" | "Doe" | "Excel";

userName = "Excel";

// Functions 
const add = (a :number, b: number): number => {
    return a + b;
}

// void meaning none instead of using null or undefined
const logmesg = (message: any): void => {
    console.log(message)
}

// -----------------------------------------------------
// using type for Type alias
type MathFunction = ( a: number, b: number ) => number;
// using interface for Type alias
interface NewMathFunction {
    ( a: number, b: number ) : number
}

const multiplyNum: MathFunction = (a, b) => {
    return a*b;
}

const addNum: NewMathFunction = function(a, b) {
    return a+b;
}

// Optional parameters
const optional = (a: number, b: number, c?: number): number => {
    if(typeof c !== "undefined"){
        return a+b+c
    }
    return a+b
}

// Default Parameters
const defaultParams = (a: number, b: number, c: number = 5): number => {
    return a + b + c;
}