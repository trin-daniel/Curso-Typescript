"use strict";
class Execise {
    constructor(items = []) {
        this.items = items;
    }
    findItems(id) {
        const result = this.items.find(item => item.key === id);
        if (result) {
            return result;
        }
        else {
            return null;
        }
    }
    add({ key, value }) {
        const finded = this.findItems(key);
        if (finded) {
            finded.value = value;
        }
        else {
            this.items.push({ key, value });
        }
    }
    print() {
        console.log(this.items);
    }
    clear() {
        this.items = [];
    }
}
const execise = new Execise();
execise.add({ key: 1, value: 'Pedro' });
execise.add({ key: 2, value: 'Rebeca' });
execise.add({ key: 3, value: 'Maria' });
execise.add({ key: 1, value: 'Gustavo' });
console.log(execise.findItems(1));
execise.print();
execise.clear();
execise.print();
//# sourceMappingURL=Exercise-generics.js.map