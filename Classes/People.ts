// Metodo mais verboso
class People {
  public name: string;
  public lastName: string;
  public cpf: string;

  constructor(name: string, lastName:string, cpf:string){
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

const isPeople = new People('Diego Silva', 'Faria Junior', '003.339.123-45');
console.log(isPeople);
