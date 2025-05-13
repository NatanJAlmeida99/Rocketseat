class Animal {
    constructor(name) {
        this.name = name
    }

    makeNoise() {
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {
    
}

class Cat extends Animal {

}

const dog = new Dog("Belu")
console.log(dog.name);
dog.makeNoise()

const cat = new Cat("Mel")
console.log(cat.name);
cat.makeNoise()
