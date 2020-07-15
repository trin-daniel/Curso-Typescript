"use strict";
;
/*
  *Uso de propriedades opcionais da interface.
  *Propriedade complemtent nao sera usada visando demonstrar que propriedades opcionais
  *nao causaram erros caso nao seja passadas na criacao de um objeto, classe ou funcao.
*/
const send = ({ address, owner }) => {
    const { street, houseNum } = address;
    const { name, age } = owner;
    return `O cliente de nome ${name} e idade ${age},\
\ morador da casa numero ${houseNum} situada na rua ${street} não pagou suas dívidas.`;
};
const user1 = {
    owner: {
        name: 'Rafael',
        age: 23,
    },
    address: {
        street: 'Rua Bento Alves',
        houseNum: 633,
    }
};
console.log(send(user1));
const restOperator = (value, divider) => value % divider;
// O resultado do resto da operação: número pá (0)
console.log(restOperator(10, 2));
class Module {
    evenNumber(n1) {
        if (n1 % 2 === 0) {
            console.log('Esse numero fornecido como entrada é Par:', n1);
        }
        else {
            console.log('Esse numero fornecido como entrada é impar:', n1);
        }
    }
}
const MathModule = new Module();
MathModule.evenNumber(1);
class Database {
    constructor(tables, row) {
        this.tables = tables;
        this.row = row;
        this.tables;
        this.row;
    }
    Model() {
        this.tables.push(this.row);
        return this.tables;
    }
}
const tablesdb = [
    {
        title: 'Clients',
        encode: 'UTF-8'
    },
    {
        title: 'sales',
        encode: 'UTF-8'
    },
];
const usersdb = { name: 'Danilo', age: 26 };
const users = new Database(tablesdb, usersdb);
console.log(users);
Object.prototype.log = function () {
    console.log(this.toString());
};
// Funcionalidade log implementada através da extensão Object.
const products = ['Perfume', 'Camiseta', 'Calsa'];
products.log();
//# sourceMappingURL=interface-2.js.map