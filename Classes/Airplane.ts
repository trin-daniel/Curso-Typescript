class Airplane {
  constructor( public readonly name: string){
    this.name = name;
  }
}

const airplane = new Airplane('Airbus 3747');
console.log(airplane);
// Propriedades somente leitura nao permitem reatibuicao de valor.
// airplane.name = 'Bi-motor';
