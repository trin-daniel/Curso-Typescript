// Classe abstrata, esta servindo como uma abstração, um modelo.
// iPhone é um filho, que estende as responsabilidades de seu pai, como obrigação.
abstract class SmartPhone {
  protected phoneNumber : number = 0;
// Esse metodo se torna obrigatorio em uma classe herdeira.
  abstract execute (phoneNumber: number): void;

  public called(): string{
    return `Você está efetuando uma ligação para o número ${this.phoneNumber}`;
  }
}

class Iphone extends SmartPhone {
  execute(phoneNumber: number): void{
    this.phoneNumber = phoneNumber;
  }
}

const phone = new Iphone()
phone.execute(455675439);
console.log(phone.called());
