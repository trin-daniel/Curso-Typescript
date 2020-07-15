/*
  * Tipo Genérico.
  * Inicializa aceitando qualquer valor.
  * T pode assumir qualquer forma durante tempo o tempo de execução, desde de que seja especificado.
*/

// Arrow function usando generics.
const echo = <T>(n: T): T => n;
console.log(echo<number>(10));

/*

  * Generics na API do javascript.
  * Tipo array e genérico em sua definição, mas se torna especifico quando passado o tipo de conteúdo
  * que ele pode receber.

*/
const names: Array<string> = ['Eduardo', 'Matheus'];
console.log(names)

// Passando argumentos do tipo Generic.
function print<T>(args: T[]): void {
  args.forEach(arg => console.log(arg))
}

type Peoples = {
  name: string,
  lastName: string
}
print<Peoples>([{
  name: 'Larissa',
  lastName: 'Silva'
}])

// Tipo funcao com generics.
// Declarando tipo Extension.
type Extension = <T>(data: T) => T;

const Music: Extension = (value) => value;
console.log(Music<string>('mp3'));


// Tipo genérico em classes.
// Tipo T foi resolvido para o tipo numero.
abstract class OperationBinary<T, R>{
  constructor(
    public op: T,
    public op2: T
  ) { }
  abstract execute(): R
}

class SumBinary extends OperationBinary<number, number> {
  execute(): number {
    return this.op + this.op2;
  }
}
console.log(new SumBinary(10, 30).execute());

// Desafio: Diferença entre datas.
// Aplicando conceito de tipos genéricos diferentes.

class DifferenceBetweenDates extends OperationBinary<Date, string>{
  execute(): string {
    return `${this.op.getDate() - this.op2.getDate()} dia(s)`;
  }
}
console.log(new DifferenceBetweenDates(new Date('07/24/2000'), new Date()).execute())