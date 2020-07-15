"use strict";
let chanel = 'youtubeBR';
let subscribes = 800000000;
// Atribuicao incorreta para o tipo string em chanel.
// chanel = subscribes;
console.log(chanel, `${subscribes} subscribes`);
// Tipo any implicito causa erros.
// Argumento a e b são implicitamente do tipo any.
// function calculate(a, b){
//   return a * b;
// }
// Corrigindo problema:
// Any sendo explicito em argumentos.
function calculate(a, b) {
    return a * b;
}
console.log(calculate(40, '50'));
// Casos em que podem ocorrer erros na compilcao devido a variaveis que foram 
// delcaras mas nao usadas, argumentos passados, mas nao usados, e eventuais nulos 
// indesejados.
// function compiler(name: string, age: number) :string{
//   // phrase declarada mas nunca usada. noUnesedLocals
//   // parameter age passado, mas nunca usado. noUnusedParameters
//   let phrase = 'hello people';
//   if(name){
//     return 'Carlos'
//   }else{
//     return name;
//   }
//   // Possivel retorno undefined
//   return;
// }
// compiler();
//# sourceMappingURL=compilator.js.map