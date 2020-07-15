"use strict";
/* Casos de possiveis erros.
Variáveis declaradas com let e const.
Comportamento hoisting ocorre somente em variáveis declaradas com var.
A variável declarada depois de ser chamada sofrera uma elevação,
internamente ficara como se tivesse sido definida antes de sido
chamada, mas seu resultado sera undefined.

console.log(isDefined);
var isDefined =  'Foi definida?';

Hoisting nao ocorre em const e let.

Variáveis chamadas fora de seu bloco de atuação causaram erros de compilação, exceto
as declaradas com var, causaram erros, mas funcionaram.

let isReal = true;
if(isReal){
  var error = 'ocorrera um erro no compilador, mas executara a compilação normalmente';
}
console.log(error);

Reatribuicao de valores a constantes tambem nao podem ocorrer, assim como no javascript,
porem ser o target do compilador estiver na versao do es5 ele ira converte o o codigo typescript
para uma versao mais antiga do ecmascript, versao essa que nao possui o recurso const, logo
sera substituida por var e o codigo funcionara normalmente.

const notebook: string = 'Modelo cce';
notebook = 'Modelo Acer';
*/
// função arrow.
// O this não varia, não importa onde a função for chamada.
// O this possui uma relação forte com o contexto léxico em que a função foi definida.
const multi = (num1, num2) => num1 * num2;
console.log(multi(3, 6));
// função definida de forma comum
function subtract(num1, num2) {
    return num1 / num2;
}
console.log(subtract(10, 2));
// Argumentos em funções arrow.
// Função sem argumento.
const args = () => 'Função sem argumento.';
console.log(args());
// Função com um unico argumento tipado.
const firstArgs = (name) => name;
console.log(firstArgs('Função com um unico argumento tipado'));
// Parâmetro / Argumento padrão.
// Se nenhum valor for passado apara count ele assumira que seu valor padrão é 5.
const countdownTimer = (count = 5) => {
    while (count > 0) {
        count--;
        console.log(count);
    }
};
countdownTimer(3);
// Operador spread.
// Espalhando os valores do vetor numbers dentro da fucao max usando o operador spread,
// para extrair esses valores do array, a funcao max retornara o maior numero passado como argumento.
const numbers = [2, 5, 6, 10];
console.log('spread', Math.max(...numbers));
// Operador rest
// Junta o valor de dois vetores em um novo, resultando em um vetor composto pelo dois anteriores.
const classA = ['Pedro', 'Maria', 'Clara'];
const classB = ['Ianka', 'Jorge', 'Rafaela'];
const joinClasses = [...classA, ...classB];
console.log(joinClasses);
// Argumentos de funcoes em conjuto com o operador rest.
function printNames(...names) {
    return names;
}
console.log(printNames('Carlos', 'Guilherme', 'Jorge', 'Ana'));
const tupla = ['Rodrigo', 23, 'solteiro'];
function information(...tupla) {
    console.log(tupla);
}
information(...tupla);
// Operador destructuring para vetores (Array).
// Destructuring em vetores equivale a acessar os valores pelo índice. 
const courses = ['Curso JS', 'Curso PHP', 'Curso Java'];
const [courseJS] = courses;
console.log(courseJS);
// Operador destructuring para objetos.
// Acessa propriedades de objetos, equivalente a notação ponto, porem menos verboso.
const client = {
    name: 'Hugo',
    lastName: 'Silva Husky',
    age: 32,
    address: {
        city: 'New York',
        number: 3323,
    }
};
// Address já havia sido definido, foi necessário passar um alias para não causar erro de redeclaração.
const { address: addressClient } = client;
console.log(addressClient);
// Template literals ou template string.
// Recurso de interpolação de variáveis e expressões com strings.
const id = 33434;
const notifications = 6;
console.log(`Usuário com id:${id},
possui: ${notifications} notificações`);
// Promises.
// Exemplo simplista.
function time() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('tudo ok');
        }, 3000);
    });
}
;
// Promise pendente.
// Ainda não resolvida
// console.log(time());
// Demora 3 segundo para responder.
time().then(response => console.log(response));
//# sourceMappingURL=ecmascript.js.map