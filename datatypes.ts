// any is like fine whatever, i dont have a type
let anyData: any = 's';
console.log(anyData.toUpperCase());

let ukData: unknown = 24;
if(typeof ukData === 'string'){
    console.log(ukData.toUpperCase());
} else {
    console.log('ukData is not a string');
}

// union type
// used often in apis
let id: string | number;
id = 'ABC';
id = 123;
// id = true; // Error: Type 'boolean' is not assignable to type 'string | number'
console.log(id);

// arrays
let nums: number[] = [1,2,3,4];
let strArr: String[] = ['a']