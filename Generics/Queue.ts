class Queue<T extends string | number> {
  constructor(private list: T[] = []) { }

  add(name: T): Array<T> {
    this.list.push(name);
    return this.list;
  }
  remove(): Array<T> {
    return this.list.splice(0, 1)
  }

  print(): void {
    console.log(this.list);
  }
};

const clients = new Queue<string>();
clients.add('Rebeca');
clients.add('Roberto');
clients.add('Bruna');
clients.remove();
clients.print();

const clientNum = new Queue<number>();
clientNum.add(1);
clientNum.add(3);
clientNum.remove();
clientNum.print();