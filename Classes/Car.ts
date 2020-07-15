// Encapsulamento de atributos e métodos, somente existe no typescript, no javascript não existe.
class Car {
  constructor(
    public model: string,
    public brand: string,
    private velocityMax: number = 250,
    private velocityCurrent: number = 0,
  ) {
    this.model,
    this.brand;
    this.velocityMax;
    this.velocityCurrent;
  }

  protected changeSpeed(delta: number): number {
    const velocity = this.velocityCurrent + delta;
    const isVelocityValid = velocity >= 0 && velocity <= this.velocityMax;

    if (isVelocityValid) {
      this.velocityCurrent = velocity;
    } else {
      this.velocityCurrent = delta > 0 ? this.velocityMax : 0;
    }
    return this.velocityCurrent;
  }
  public speedUp(): number {
    return this.changeSpeed(10);
  }

  public stop(): number {
    return this.changeSpeed(-10);
  }
}

const car = new Car('Honda civic', 'Honda', 340, 0);
console.log(car.model, car.brand);
console.log(car.speedUp())
// console.log(car.stop())
// setInterval(()=>{ console.log(car.speedUp())}, 2000);

/* Herdando métodos da super classe Car.
  * Esses métodos herdados somente puderam ser alterados devido ao nível de visibilidade ter sido 
  * alterado de private para protected, public também daria no mesmo, só que com menos segurança.
*/

class Ferrari extends Car {
  constructor(model: string, velocityMax: number){
    super('Ferrari', model, velocityMax)
  }
  public speedUp(): number {
    return this.changeSpeed(20);
  }

  public stop(): number {
    return this.changeSpeed(-10);
  }
};

const f40 = new Ferrari('F40', 120);
console.log(`${f40.model} ${f40.brand}`);
// Acelerando ferrari.
console.log(f40.speedUp());
console.log(f40.speedUp());

