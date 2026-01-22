function add(a: number, b: number) {
  return a + b;   // return type is optional if inferred
}
console.log(add(2, 3));

const greet = (msg: String) =>{
    console.log(msg);
}
greet('crazyyy');

interface User {
    name: string
}
function printUsername(user: User) {
    console.log(user.name);
}

printUsername({name: 'Avinash'});