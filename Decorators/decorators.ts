/* 
  * Chamando o decorator que sera executado em tempo de execução.
*/
@vardump
class Hotel {
  constructor() {
    console.log('Hotel Miami');
  }
}

function vardump(constructor: Function) {
  console.log(constructor)
}
/*
  * Função factory que retorna um decorator.
  * O decorator foi usado na classe calc.
*/
@factory(10, 20)
class Calc {
  constructor() {
    console.log('O valor:')
  }
}
/* 
  *Função factory(Fabrica).
*/
function factory(a: number, b: number) {
  return (_: Function): void => {
    console.log(a + b)
  }
}

/*
  * Herdando comportamentos da classe pai através do uso de decorações(decorators),
  * essa técnica possibilita que o decorador possa ser
  * chamado a partir de cada nova instância da classe pai.
  * A classe filha gerada é anônima.
*/

// Tipo mais generico possivel de um construtor.
type Constructor = { new(...args: any[]): {} }

@logDecorator
class Father {
  constructor() { console.log('Classe pai chamada') }
}
function logDecorator(constructor: Constructor) {
  // somente sera executada uma unica vez, independente de quantidade de instancias de Father.
  console.log('antes de chamar a classe filha')
  // somente sera executada quando a classe Father tiver uma instancia gerada.
  return class extends constructor {
    constructor(...args: any[]) {
      if (args) {
        console.log('Decorator chamado(momento em que a classe filha é chamada)');
        // Super chama o construtor da classe pai.
        super()
      }
    }
  }
}

const inst = new Father();
// const inst2 = new Father();

// Adicionando metodos em uma classe usando o decorator e prototype.
interface Printer {
  printName?(): void;
}
@brand
class Printer {
  constructor(private brandName: string) {
    this.brandName;
  }
}
function brand(constructor: Function) {
  constructor.prototype.printName = function () {
    console.log(this.brandName);
  }
}
const printer = new Printer('HP 340');
const printer2 = new Printer('Epson 265');
/*
  * Aqui dependendo da existência ou não do método haverá ou não chamada para o próprio,
  * dessa forma possíveis erros podem ser evitados.
*/
printer.printName && printer.printName();
printer2.printName && printer2.printName();



// Desafio Decorator perfilAdmin.
// Minha solução para o desafio, fiz algumas alterações para tentar complicar mais o exemplo.
interface administrativeChange {
  logon(): void
}
@isAdmin
class administrativeChange {
  constructor(
    private name: string,
    private email: string,
    private admin: boolean
  ) {
    this.name;
    this.email;
    this.admin
  }
}

function isAdmin(constructor: Function) {
  constructor.prototype.logon = function (this) {
    if (this.name && this.name === 'Guilherme Filho') {
      if (this.email && this.email === 'guigui@gmail.com') {
        if (this.admin && this.admin === true) {
          const loggedInAdmin = {
            name: 'Guilherme Filho',
            email: 'guigui@gmail.com',
            admin: true
          }
          console.log(loggedInAdmin)
        } else {
          const loggedInUser = {
            name: 'Guilherme Filho',
            email: 'guigui@gmail.com',
            admin: false
          }
          console.log(loggedInUser)
        }
      } else {
        throw new Error('E-mail incorreto');
      }
    } else {
      throw new Error('Nome incorreto');
    }
  }
}

const userReturned = new administrativeChange('Guilherme Filho', 'guigui@gmail.com', true);
userReturned.logon && userReturned.logon();
/*
  * Solucao do desafio implementada pelo professor.
  * Desafio Decorator perfilAdmin.
*/

// Se alterar admin para false ira causar uma exceção, que nesse caso esta ok.
const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}
@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissao')
      }
    }
  }
}

// Aplicando decorações (decorators) em métodos.
class Bank {
  // Para que esse decoração entre em ação é necessário que a validação do toWithdraw falhe ou seja inexistente.
  @changeAttribute
  private balance: number;
  constructor(balance: number) {
    this.balance = balance;
  }
  @validateBalance
  toWithdraw(@argsDecorator value: number) {
    if (value <= this.balance) {
      this.balance -= value;
      return true;
    } else {
      throw new Error('Operação não permitida');
    }
  }
  @validateBalance
  getBalance(): number {
    return this.balance;
  }
}

const bankAccount = new Bank(5000);
bankAccount.toWithdraw(400);
// bankAccount.toWithdraw(6000);
console.log(bankAccount.getBalance());
/*
  * Essa tentativa de substituição do método sera barrada pela decoração (decorator) de métodos.
  * bankAccount.toWithdraw = function () { return false; }
*/

// console.log(bankAccount.getBalance());

// Essa decoração ira evitar que o método getBalance seja sobrescrito.
function validateBalance(
  target: any,
  identifier: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(identifier);
  descriptor.writable = false;
}
/*
  * Decoração de propriedade.
  * Essa decoração ira substituir a propriedade alvo por uma outra que possuíra o método get e set 
  * que possibilitara a manipulação da propriedade.
*/
function changeAttribute(target: any, identifier: string) {
  delete target[identifier];
  Object.defineProperty(target, identifier, {
    get: (): any => {
      return target[`_${identifier}`];
    },
    set: (value: any): void => {
      if (value < 0) {
        throw new Error('Saldo invalido');
      } else {
        target[`_${identifier}`] = value;
      }
    }
  })
}
// Decoração de argumentos de métodos.
// Não possibilita o acesso ao valor do argumento de maneira simples, para que possa ser acessado é necessário que
// seja aplicada uma técnica de manipulação de objeto semelhante ao da decoração de métodos a cima.
function argsDecorator(target: any, identifier: string, indexParams: number) {
  console.log('Alvo:' + target);
  console.log('Identificador:' + identifier);
  console.log('Indice:' + indexParams)
}