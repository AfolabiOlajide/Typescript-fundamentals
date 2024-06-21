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

// REST 
const total = (...nums: number[]): number =>{
    return nums.reduce((prev, curr) => prev + curr);
}

logmesg(total(1,2,3,4)); // output ---> 10
// NB:
// When you use "REST" params you pass them as an array of whatever type you choose; 


// The "never" type (not that popular)
// This is for functions that explicitly throw errors
const errorMsg = (msg: string): never => {
    throw new Error(msg);
}

// It also applies to functions that retuns an infinite loop
// typescript automatically inferes the type when you hover on the function
const infiniteExp = () => {
    let i: number = 1
    while (true){
        i++;
        if(i > 100) break // since typscript helps to infer the types and we notice that our function returns never 
                          // it is a good way to help you in your program to notice the error and fix it as we have 
                          // done here, now the infered typw is "void"
    }
}

// Custom type guard
const checkType = (value: any, type: string): boolean => {
    return typeof value === type ? true : false;
}

const numberOrString = (value: number | string) : string => {
    if(checkType(value, "number")) return "number";
    if(checkType(value, "string")) return "string";
    return errorMsg("Cannor reach this point");
}

// testing repo changes