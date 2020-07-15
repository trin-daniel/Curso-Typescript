// Exercício 1 - Classe
class Motorcycle {
  constructor(
    private name: string, 
    private velocity: number = 0
    ){
    this.name
    this.velocity;
  }

  honk(): void{
    console.log('Toooooooooot')
  }

  accelerate(delta: number): number{
    return this.velocity = this.velocity + delta;
  }

}
const motorcycle = new Motorcycle('Ninja')
motorcycle.honk()
console.log(motorcycle.accelerate(30));
console.log(motorcycle.accelerate(50));

 
// Exercício 2 - Herança
abstract class Object2D {
  public base: number = 0;
  public height: number = 0;

  abstract area(): number;
}

class Rectangle extends Object2D{
  area(): number {
    return this.base * this.height;
  }
}
const rectangle = new Rectangle;
rectangle.base = 10;
rectangle.height = 40;
console.log(rectangle.area());

 
// Exercício 3 - Getters & Setters
class Intern {
  constructor(private _firstName: string){
    this._firstName;
  }
  get firstName():string{
    return this._firstName;
  }
  set firstName(name: string){
    if(name.length >= 3){
      this._firstName = name;
    }else{
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