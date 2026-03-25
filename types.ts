// tuples
type tuple = [number, string, boolean];
const t1: tuple = [1, 'hello', true];
console.log(`Tuple values are: ${t1[0]}, ${t1[1]}, ${t1[2]}`);

// union type
// interface cannot directly implement this
type ID = number | string;
let userId: ID;
userId = 101;
console.log(`User ID as number: ${userId}`);
userId = '202A';
console.log(`User ID as string: ${userId}`);

// arrow function types
type Add = (a: number, b: number) => number;
const addNumbers: Add = (a, b) => a + b;
console.log(`Sum: ${addNumbers(5, 10)}`);

// type can do stuff similar to interface and more
// but interface is preferred for defining the structure of an object
// cz of being more closer to oops and being extendable
type Vehicle = {
    color: string,
    message(): void
}

const scorpio: Vehicle = {
    color: 'black',
    message() {
        console.log('Scorpio go brrrrr!!');
    }
}

console.log(`Vehicle color is: ${scorpio.color}`);
scorpio.message();

// intersection types
type SUV = Vehicle & {size: string};
const fortuner: SUV = {
    color: 'white',
    size: 'full',
    message() {
        console.log(`Fortuner is a ${this.size} sized SUV`);
    }
}
console.log(`SUV color is: ${fortuner.color}`);
fortuner.message();