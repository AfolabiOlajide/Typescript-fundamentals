let newName: string = "Dave";
let greatestNumber: number;
let isLoading: boolean
let undecided: any;
let unionType: string | number;

let demoCondition: boolean = true

newName = "Afolabi";
greatestNumber = 777;
isLoading = false;
undecided = "Lets Put Something here";
unionType =  demoCondition ? 23 : "something else";


const sum = (a: string, b: number) => {
    return a+b;
}

// if you don't know the type of the data you can just mouse over and typescript will infer the type for you 
let re: RegExp  = /\w+/g; 