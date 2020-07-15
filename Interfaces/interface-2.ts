interface ClientHouse {
  owner: {
    name: string;
    age: number;
  },
  address: {
    street: string,
    houseNum: number,
    complement?: string,
  }
};
/* 
  *Uso de propriedades opcionais da interface.
  *Propriedade complemtent nao sera usada visando demonstrar que propriedades opcionais 
  *nao causaram erros caso nao seja passadas na criacao de um objeto, classe ou funcao.
*/
const send = ({ address, owner }: ClientHouse): string => {
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
}

console.log(send(user1));

// Tipo funcao.

interface RestProps {
  (n1: number, n2: number): number;
}

const restOperator = (
  value: number,
  divider: number
): number => value % divider;
// O resultado do resto da operação: número pá (0)
console.log(restOperator(10, 2));

// Classe implementando interface.

interface EvenNumber {
  evenNumber(n: number): void;
}

class Module implements EvenNumber {
  evenNumber(n1: number): void {
    if (n1 % 2 === 0) {
      console.log('Esse numero fornecido como entrada é Par:', n1);
    } else {
      console.log('Esse numero fornecido como entrada é impar:', n1);
    }
  }
}

const MathModule = new Module();
MathModule.evenNumber(1);

// Herança em interfaces.
// Emulando o funcionamento de um banco de dados bem ruim.
// Somente para por em pratica alguns experimentos
interface DatabaseProps {
  tables: object[];
}

interface Tables extends DatabaseProps {
  row: object,
}


class Database implements Tables {
  constructor(public tables: object[], public row: object) {
    this.tables;
    this.row;
  }

  Model(): Array<object> {
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
// Estendendo funcionalidade atraves do prototype.

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
}
// Funcionalidade log implementada através da extensão Object.
const products = ['Perfume', 'Camiseta', 'Calsa'];
products.log();