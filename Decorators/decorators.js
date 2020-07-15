"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
  * Chamando o decorator que sera executado em tempo de execução.
*/
let Hotel = class Hotel {
    constructor() {
        console.log('Hotel Miami');
    }
};
Hotel = __decorate([
    vardump
], Hotel);
function vardump(constructor) {
    console.log(constructor);
}
/*
  * Função factory que retorna um decorator.
  * O decorator foi usado na classe calc.
*/
let Calc = class Calc {
    constructor() {
        console.log('O valor:');
    }
};
Calc = __decorate([
    factory(10, 20)
], Calc);
/*
  *Função factory(Fabrica).
*/
function factory(a, b) {
    return (_) => {
        console.log(a + b);
    };
}
let Father = class Father {
    constructor() { console.log('Classe pai chamada'); }
};
Father = __decorate([
    logDecorator
], Father);
function logDecorator(constructor) {
    // somente sera executada uma unica vez, independente de quantidade de instancias de Father.
    console.log('antes de chamar a classe filha');
    // somente sera executada quando a classe Father tiver uma instancia gerada.
    return class extends constructor {
        constructor(...args) {
            if (args) {
                console.log('Decorator chamado(momento em que a classe filha é chamada)');
                // Super chama o construtor da classe pai.
                super();
            }
        }
    };
}
const inst = new Father();
let Printer = class Printer {
    constructor(brandName) {
        this.brandName = brandName;
        this.brandName;
    }
};
Printer = __decorate([
    brand
], Printer);
function brand(constructor) {
    constructor.prototype.printName = function () {
        console.log(this.brandName);
    };
}
const printer = new Printer('HP 340');
const printer2 = new Printer('Epson 265');
/*
  * Aqui dependendo da existência ou não do método haverá ou não chamada para o próprio,
  * dessa forma possíveis erros podem ser evitados.
*/
printer.printName && printer.printName();
printer2.printName && printer2.printName();
let administrativeChange = class administrativeChange {
    constructor(name, email, admin) {
        this.name = name;
        this.email = email;
        this.admin = admin;
        this.name;
        this.email;
        this.admin;
    }
};
administrativeChange = __decorate([
    isAdmin
], administrativeChange);
function isAdmin(constructor) {
    constructor.prototype.logon = function () {
        if (this.name && this.name === 'Guilherme Filho') {
            if (this.email && this.email === 'guigui@gmail.com') {
                if (this.admin && this.admin === true) {
                    const loggedInAdmin = {
                        name: 'Guilherme Filho',
                        email: 'guigui@gmail.com',
                        admin: true
                    };
                    console.log(loggedInAdmin);
                }
                else {
                    const loggedInUser = {
                        name: 'Guilherme Filho',
                        email: 'guigui@gmail.com',
                        admin: false
                    };
                    console.log(loggedInUser);
                }
            }
            else {
                throw new Error('E-mail incorreto');
            }
        }
        else {
            throw new Error('Nome incorreto');
        }
    };
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
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissao');
            }
        }
    };
}
// Aplicando decorações (decorators) em métodos.
class Bank {
    constructor(balance) {
        this.balance = balance;
    }
    toWithdraw(value) {
        if (value <= this.balance) {
            this.balance -= value;
            return true;
        }
        else {
            throw new Error('Operação não permitida');
        }
    }
    getBalance() {
        return this.balance;
    }
}
__decorate([
    changeAttribute
], Bank.prototype, "balance", void 0);
__decorate([
    validateBalance,
    __param(0, argsDecorator)
], Bank.prototype, "toWithdraw", null);
__decorate([
    validateBalance
], Bank.prototype, "getBalance", null);
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
function validateBalance(target, identifier, descriptor) {
    console.log(target);
    console.log(identifier);
    descriptor.writable = false;
}
/*
  * Decoração de propriedade.
  * Essa decoração ira substituir a propriedade alvo por uma outra que possuíra o método get e set
  * que possibilitara a manipulação da propriedade.
*/
function changeAttribute(target, identifier) {
    delete target[identifier];
    Object.defineProperty(target, identifier, {
        get: () => {
            return target[`_${identifier}`];
        },
        set: (value) => {
            if (value < 0) {
                throw new Error('Saldo invalido');
            }
            else {
                target[`_${identifier}`] = value;
            }
        }
    });
}
// Decoração de argumentos de métodos.
// Não possibilita o acesso ao valor do argumento de maneira simples, para que possa ser acessado é necessário que
// seja aplicada uma técnica de manipulação de objeto semelhante ao da decoração de métodos a cima.
function argsDecorator(target, identifier, indexParams) {
    console.log('Alvo:' + target);
    console.log('Identificador:' + identifier);
    console.log('Indice:' + indexParams);
}
//# sourceMappingURL=decorators.js.map