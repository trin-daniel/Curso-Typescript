"use strict";
// Exercício 1 - Classe
class Motorcycle {
    constructor(name, velocity = 0) {
        this.name = name;
        this.velocity = velocity;
        this.name;
        this.velocity;
    }
    honk() {
        console.log('Toooooooooot');
    }
    accelerate(delta) {
        return this.velocity = this.velocity + delta;
    }
}
const motorcycle = new Motorcycle('Ninja');
motorcycle.honk();
console.log(motorcycle.accelerate(30));
console.log(motorcycle.accelerate(50));
// Exercício 2 - Herança
class Object2D {
    constructor() {
        this.base = 0;
        this.height = 0;
    }
}
class Rectangle extends Object2D {
    area() {
        return this.base * this.height;
    }
}
const rectangle = new Rectangle;
rectangle.base = 10;
rectangle.height = 40;
console.log(rectangle.area());
// Exercício 3 - Getters & Setters
class Intern {
    constructor(_firstName) {
        this._firstName = _firstName;
        this._firstName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        if (name.length >= 3) {
            this._firstName = name;
        }
        else {
            this._firstName = 'Anônimo';
        }
    }
}
const intern = new Intern('Rodrigo');
console.log(intern.firstName);
intern.firstName = 'Le';
console.log(intern.firstName);
intern.firstName = 'Leonardo';
console.log(intern.firstName);
//# sourceMappingURL=Exercise-classes.js.map