"use strict";
class Queue {
    constructor(list = []) {
        this.list = list;
    }
    add(name) {
        this.list.push(name);
        return this.list;
    }
    remove() {
        return this.list.splice(0, 1);
    }
    print() {
        console.log(this.list);
    }
}
;
const clients = new Queue();
clients.add('Rebeca');
clients.add('Roberto');
clients.add('Bruna');
clients.remove();
clients.print();
const clientNum = new Queue();
clientNum.add(1);
clientNum.add(3);
clientNum.remove();
clientNum.print();
//# sourceMappingURL=Queue.js.map