"use strict";
// String, inserida implicitamente.
let user = "Carlos Daniel";
console.log(typeof user, user);
// Number, inserido implicitamente.
const age = 20;
console.log(typeof age, age);
//Boolean, inserido implicitamente.
const isValid = true;
console.log(typeof isValid, isValid);
// Declaracao de tipos explicitamente.
const gender = 'Homem';
console.log(typeof gender, gender);
const isDeath = false;
console.log(typeof isDeath, isDeath);
// Tipo array com subtipos dos dados contidos em si.
// Array de strings, tipo repassado implicitamente.
const cities = ['Lagarto', 'Laranjeiras', 'Saquarema'];
console.log(typeof cities, cities);
// Tipos do conteudo do array.
// Array de strings.
const states = ['Sergipe', 'Rio de Janeiro', 'Santa Catarina'];
console.log(typeof states[0], states[0]);
// Tipo Tupla: Array com tipos definidos para cada posição, respeitando a ordem da declaração.
const address = ['Rua Augusto lisboa', 63, 'Apartamento B'];
console.log(typeof address, address);
//Tipo enum.
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 110] = "verde";
    Cor[Cor["azul"] = 111] = "azul";
    Cor[Cor["branco"] = 112] = "branco";
})(Cor || (Cor = {}));
const pen = Cor.azul;
// retorno 110, porque o seu antecesso recebeu explicitamente 110.
console.log(typeof pen, pen);
// Tipo any
let country = 'Brasil';
console.log(typeof country, country);
country = ['Portugal', 'Brasil', 'Espanha'];
console.log(typeof country, country[0]);
// Tipos em funções.
// Tipando argumentos e retorno da função.
function myFavorite(name) {
    return name;
}
function cpu(type) {
    console.log(`${type} esta muito potente.`);
}
cpu('Ryzen 7');
console.log(myFavorite('X-burger'));
// Tipo função
function calc(a, b) {
    return a + b;
}
// Para que a função calc seja inserida em sum ela precisa seguir as regras de tipagem e ordem dos
// argumento de sum.
// sum recebe como assinatura uma função arrow com 
// parametros tipados: (num1: number, num2: number)=> number;
let sum;
sum = calc;
console.log(sum(30, 50));
// Tipando propiedades de objetos
const people = {
    name: 'Maria',
    age: 27
};
console.log(typeof people, typeof people.name, people);
// Desafio - 01 Criar obejeto funcionario com a função bater ponto.
const employee = {
    supervisors: ['Rafaela', 'Guilherme'],
    point(hour) {
        if (hour <= 8) {
            return 'Horario normal';
        }
        else {
            return 'Fora do horario';
        }
    }
};
console.log(employee.point(8));
console.log(employee.point(10));
console.log(employee.supervisors);
const pessoa = {
    name: 'Carlos',
    age: 20,
    city: (city) => {
        return city;
    }
};
console.log(pessoa.name);
console.log(pessoa.age);
console.log(pessoa.city('Lagarto'));
// Multiplos valores com union type.
const nota = 'nota 10';
console.log(nota);
// Checando tipos manualmente
const date = new Date();
if (typeof date === 'object') {
    console.log('Date possui o tipo objeto');
}
else {
    console.log(`date possui o tipo ${typeof date}`);
}
// Tipo never 
// Usada em cenarios que uma funcao nunca vai retornar nada e nao possui uma execucao bem sucedida.
function alertError(message) {
    throw new Error(message);
}
const coffe = {
    // cor: white retorna um erro 
    cor: 'black',
    validadeColor() {
        if (this.cor === 'black') {
            return 'este café esta ótimo';
        }
        else {
            alertError('este café esta estragado');
        }
    }
};
console.log(coffe.validadeColor());
const house = {
    adress: 'Rua Peixoto Limbo',
    num: 33
};
console.log(house);
// Quando o valor nulo e atribuido na declaracao de uma variavel, 
// seu tipo se torna any implicitamente.
let state = null;
console.log(state);
// State agora possui o tipo any atribuido implicitamente.
state = 'Rio de Janeiro';
console.log(state);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map