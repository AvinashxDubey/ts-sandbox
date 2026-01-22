// ts is statically typed superset of js
// this allows errors to be caught at compile time rather than runtime
// let a = 10;
// a = 'hello'; // Error: Type 'string' is not assignable to type 'number'

// we can explicitly specify types
let count: number = 10;
// but if TS can infer, don’t bother to annotate or itd make the code more verbose
// TS is supposed to make code less verbose and more readable
let ct = 10; // inferred as number

console.log(`the type of count is: ${typeof count}`);
console.log(`the type of ct is: ${typeof ct}`);