// String, inserida implicitamente.
let user = "Carlos Daniel";
console.log(typeof user, user);

// Number, inserido implicitamente.
const age = 20;
console.log(typeof age, age)

//Boolean, inserido implicitamente.
const isValid = true;
console.log(typeof isValid, isValid)

// Declaracao de tipos explicitamente.
const gender: string = 'Homem';
console.log(typeof gender, gender);
const isDeath: boolean = false;
console.log(typeof isDeath, isDeath);


// Tipo array com subtipos dos dados contidos em si.
// Array de strings, tipo repassado implicitamente.
const cities = ['Lagarto', 'Laranjeiras', 'Saquarema'];
console.log(typeof cities, cities)

// Tipos do conteudo do array.
// Array de strings.
const states: string[] = ['Sergipe', 'Rio de Janeiro', 'Santa Catarina'];
console.log(typeof states[0], states[0]);

// Tipo Tupla: Array com tipos definidos para cada posição, respeitando a ordem da declaração.

const address: [string, number, string] = ['Rua Augusto lisboa', 63, 'Apartamento B'];
console.log(typeof address, address)

//Tipo enum.
enum Cor {
  verde= 110,
  azul,
  branco
}

const pen: Cor = Cor.azul;
// retorno 110, porque o seu antecesso recebeu explicitamente 110.
console.log(typeof pen, pen);

// Tipo any
let country:any = 'Brasil';
console.log(typeof country, country);
country = ['Portugal', 'Brasil', 'Espanha'];
console.log(typeof country, country[0]);

// Tipos em funções.
// Tipando argumentos e retorno da função.
function myFavorite(name:string ): string {
  return name;
}

function cpu(type: string): void{
  console.log(`${type} esta muito potente.`)
}
cpu('Ryzen 7');
console.log(myFavorite('X-burger'));

// Tipo função
function calc(a: number, b: number): number{
  return a + b;
}
// Para que a função calc seja inserida em sum ela precisa seguir as regras de tipagem e ordem dos
// argumento de sum.
// sum recebe como assinatura uma função arrow com 
// parametros tipados: (num1: number, num2: number)=> number;
let sum: (num1: number, num2: number)=> number;
sum = calc;
console.log(sum(30, 50))

// Tipando propiedades de objetos
const people:{name: string, age: number} = {
  name: 'Maria',
  age: 27
}

console.log(typeof people, typeof people.name, people);

// Desafio - 01 Criar obejeto funcionario com a função bater ponto.

const employee:{
  supervisors: string[],
  point: (hour: number)=> string
} = {
    supervisors:['Rafaela', 'Guilherme'],
    point(hour:number): string{
      if(hour <= 8){
        return 'Horario normal';
      }else{
        return 'Fora do horario';
      }
    }
  }
console.log(employee.point(8));
console.log(employee.point(10));
console.log(employee.supervisors);

// Tipos personalizados( Alias ).
type Pessoa ={
  name: string,
  age: number,
  city: (city: string) => string;
}

const pessoa : Pessoa ={
  name: 'Carlos',
  age: 20,
  city:(city:string) =>{
    return city;
  }
}

console.log(pessoa.name);
console.log(pessoa.age);
console.log(pessoa.city('Lagarto'));


// Multiplos valores com union type.

const nota: number | string = 'nota 10'
console.log(nota)

// Checando tipos manualmente

const date = new Date();
if(typeof date === 'object'){
  console.log('Date possui o tipo objeto');
}else{
  console.log(`date possui o tipo ${typeof date}`);
}

// Tipo never 
// Usada em cenarios que uma funcao nunca vai retornar nada e nao possui uma execucao bem sucedida.

function alertError(message:string):never{
  throw new Error(message)
}
const coffe = {
  // cor: white retorna um erro 
  cor:'black',
  validadeColor(){
    if(this.cor === 'black'){
      return 'este café esta ótimo'
    }else{
      alertError('este café esta estragado')
    }
  }

}
console.log(coffe.validadeColor())
// Valores opcionais com o tipo null
type House ={
  adress: string,
  num: number | null;
}

const house: House ={
  adress: 'Rua Peixoto Limbo',
  num: 33
}
console.log(house);
// Quando o valor nulo e atribuido na declaracao de uma variavel, 
// seu tipo se torna any implicitamente.
let state = null;
console.log(state);
// State agora possui o tipo any atribuido implicitamente.
state = 'Rio de Janeiro';
console.log(state);

// Reatribuicao de valor para tipo null causa erro no compilador
// let vehicle: null = null;
// vehicle = 'Honda civic'


// Desafio: Transformar Código JS em TS - Resposta
type ContaBancaria  = {
  saldo: number,
  depositar:(valor: number)=>void;
  
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria ,
  contatos: string[],
}


let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)