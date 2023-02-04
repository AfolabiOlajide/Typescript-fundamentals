type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let newA: One = "hello";
let newB = newA as Two; // less specific
let newC = newA as Three; // more specific

let newD = <One>"world";
let newE = <string | number>"world";

const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a+b;
    return "" + a + b;
}

let myVal: string = addOrConcat(2, 2, "concat") as string;
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string // typescript not happy with the typescast
(10 as unknown) as string // using unknown for double casting


// The DOM
const img = document.querySelector("img")!; // the ! is a non-null assertion
const my_img = document.getElementById("#img") as HTMLImageElement; // using the HTMLImageElement as an assertion exposes the src attributes to the variable
const next_img = <HTMLImageElement> document.getElementById("#img"); // you could also use the angle bracket...

img.src
my_img.src