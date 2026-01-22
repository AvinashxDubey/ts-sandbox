// inline type annotation
const car: {make: string, model: string, price: number} = {
    make: 'Toyota',
    model: 'Camry',
    price: 24000
}
console.log(`Car make is: ${car.make}`);
// but inline types doesnt scale well
// better to use interface or type

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Alice",
    age: 30
};
console.log(`User name is: ${user.name}`);
