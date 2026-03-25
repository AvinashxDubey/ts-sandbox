// Use interface when defining object shapes for public APIs
// Use type everywhere else
// good for apis
// React props → type
// API responses → interface
// Utility / unions → type
// Library / SDK contracts → interface
interface Animal {
    type: string,
    size: string,
    eat(): void
}

interface Animal {
    sleep?(): void  // optional property
}

const dog: Animal = {
    type: 'Mammal',
    size: 'mid',
    eat: () => {
        console.log('bow wow');
    }
} 

console.log(`Dog is a ${dog.type} of ${dog.size} size`);
dog.eat();

// interface inheritance
interface Mammal extends Animal {
    mammalMessage(): void
}

const cat: Mammal = {
    type: 'Mammal',
    size: 'small',
    eat: () => {
        console.log('eating fish');
    },
    mammalMessage() {
        console.log('meow meow');
    }
}

console.log(`Cat is a ${cat.type} of ${cat.size} size`);
cat.eat();
cat.mammalMessage();

// can also use declare to add properties to existing global objects:
declare global {
    interface Window {
        myAppVersion: string
    }

    interface Window {
        myCustomMethod(): void
    }
}

// window.myAppVersion;

