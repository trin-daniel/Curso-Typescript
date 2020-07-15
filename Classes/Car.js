"use strict";
// Encapsulamento de atributos e métodos, somente existe no typescript, no javascript não existe.
class Car {
    constructor(model, brand, velocityMax = 250, velocityCurrent = 0) {
        this.model = model;
        this.brand = brand;
        this.velocityMax = velocityMax;
        this.velocityCurrent = velocityCurrent;
        this.model,
            this.brand;
        this.velocityMax;
        this.velocityCurrent;
    }
    changeSpeed(delta) {
        const velocity = this.velocityCurrent + delta;
        const isVelocityValid = velocity >= 0 && velocity <= this.velocityMax;
        if (isVelocityValid) {
            this.velocityCurrent = velocity;
        }
        else {
            this.velocityCurrent = delta > 0 ? this.velocityMax : 0;
        }
        return this.velocityCurrent;
    }
    speedUp() {
        return this.changeSpeed(10);
    }
    stop() {
        return this.changeSpeed(-10);
    }
}
const car = new Car('Honda civic', 'Honda', 340, 0);
console.log(car.model, car.brand);
console.log(car.speedUp());
// console.log(car.stop())
// setInterval(()=>{ console.log(car.speedUp())}, 2000);
/* Herdando métodos da super classe Car.
  * Esses métodos herdados somente puderam ser alterados devido ao nível de visibilidade ter sido
  * alterado de private para protected, public também daria no mesmo, só que com menos segurança.
*/
class Ferrari extends Car {
    constructor(model, velocityMax) {
        super('Ferrari', model, velocityMax);
    }
    speedUp() {
        return this.changeSpeed(20);
    }
    stop() {
        return this.changeSpeed(-10);
    }
}
;
const f40 = new Ferrari('F40', 120);
console.log(`${f40.model} ${f40.brand}`);
// Acelerando ferrari.
console.log(f40.speedUp());
console.log(f40.speedUp());
//# sourceMappingURL=Car.js.map