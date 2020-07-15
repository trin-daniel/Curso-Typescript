"use strict";
function printPhrase({ name, age, sexo }) {
    return `My name is ${name}, i am ${sexo} and i am ${age} years old`;
}
console.log(printPhrase({ name: 'Rafaela', age: 18, sexo: 'woman' }));
const book = {
    name: 'Pequeno principe',
    status: 'lido',
    price: 200,
};
const book2 = {
    name: 'Novo mundo',
    price: 150,
};
console.log(book2);
// Implementando interface CityProps na classe City.
class City {
    constructor(name) {
        this.name = name;
        this.name;
    }
    print() {
        console.log(`cidade: ${this.name}`);
    }
}
const city = new City('Lagarto');
city.print();
const value = (base, exponent) => Math.pow(base, exponent);
console.log(value(2, 10));
//# sourceMappingURL=interfaces.js.map