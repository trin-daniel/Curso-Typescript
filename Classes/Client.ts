// Métodos getters and setters, usados para seta e recuperar o valor de um dados atributo, muito usado
// quando esse atributo precisa de algum tratamento na sua entrada ou devolução de dados.
class Client {
  constructor(
    private _id: number = 0,
    private _name: string = '',
  ){
    this._id;
    this._name;
  }
  get id(): number{
    return this._id;
  }
  set id(value: number){
    if(value){
      this._id = value;
    }else{
      return;
    }
  }

  get name(): string{
    return this._name;
  }

  set name(value: string){
    if(value){
      this._name = value.toUpperCase();
    }else{
      return;
    }
  }
}

const dataClient = new Client();
dataClient.id = 123;
dataClient.name = 'Maria Ribeiro';
console.log(dataClient);