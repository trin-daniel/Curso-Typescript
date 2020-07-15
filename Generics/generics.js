"use strict";
/*
  * Tipo Genérico.
  * Inicializa aceitando qualquer valor.
  * T pode assumir qualquer forma durante tempo o tempo de execução, desde de que seja especificado.
*/
// Arrow function usando generics.
const echo = (n) => n;
console.log(echo(10));
/*

  * Generics na API do javascript.
  * Tipo array e genérico em sua definição, mas se torna especifico quando passado o tipo de conteúdo
  * que ele pode receber.

*/
const names = ['Eduardo', 'Matheus'];
console.log(names);
// Passando argumentos do tipo Generic.
function print(args) {
    args.forEach(arg => console.log(arg));
}
print([{
        name: 'Larissa',
        lastName: 'Silva'
    }]);
const Music = (value) => value;
console.log(Music('mp3'));
// Tipo genérico em classes.
// Tipo T foi resolvido para o tipo numero.
class OperationBinary {
    constructor(op, op2) {
        this.op = op;
        this.op2 = op2;
    }
}
class SumBinary extends OperationBinary {
    execute() {
        return this.op + this.op2;
    }
}
console.log(new SumBinary(10, 30).execute());
// Desafio: Diferença entre datas.
// Aplicando conceito de tipos genéricos diferentes.
class DifferenceBetweenDates extends OperationBinary {
    execute() {
        return `${this.op.getDate() - this.op2.getDate()} dia(s)`;
    }
}
console.log(new DifferenceBetweenDates(new Date('07/24/2000'), new Date()).execute());
//# sourceMappingURL=generics.js.map