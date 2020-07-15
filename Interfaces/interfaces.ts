/* Interface funciona como um contrato no qual o elemento que se associar a ele deve respeitar as regras.
 *Atributos opcionais e identificadores dinâmicos.
 *Tipo opcional e tipo qualquer 'key' não podem coexistir juntos se o tipo do valor de key for diferente de any.
*/
interface PersonFormat {
  name: string;
  age: number;
  sexo: 'man' | 'woman';
}

function printPhrase({ name, age, sexo }: PersonFormat): string {
  return `My name is ${name}, i am ${sexo} and i am ${age} years old`;
}
console.log(printPhrase({ name: 'Rafaela', age: 18, sexo: 'woman' }));

// Quando as propriedades sao opcionais ela podem ou nao ser passadas na criacao do objeto.
interface Book {
  name: string;
  status?: string;
  [key: string]: any;
}

const book: Book = {
  name: 'Pequeno principe',
  status: 'lido',
  price: 200,
}

const book2: Book = {
  name: 'Novo mundo',
  price: 150,
}

console.log(book2);


interface CityProps {
  name: string;
  print(args: string): void;
}

// Implementando interface CityProps na classe City.
class City implements CityProps {
  constructor(public name: string) {
    this.name;
  }
  print(): void {
    console.log(`cidade: ${this.name}`);
  }
}

const city = new City('Lagarto');
city.print()


/* Tipo Função.
 *Somente 'e valida para funções.
*/
interface CalculationFunction {
  (base: number, exponent: number): number;
}

const value: CalculationFunction = (base: number, exponent: number): number => base ** exponent;
console.log(value(2, 10))