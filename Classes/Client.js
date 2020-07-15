"use strict";
// Métodos getters and setters, usados para seta e recuperar o valor de um dados atributo, muito usado
// quando esse atributo precisa de algum tratamento na sua entrada ou devolução de dados.
class Client {
    constructor(_id = 0, _name = '') {
        this._id = _id;
        this._name = _name;
        this._id;
        this._name;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        if (value) {
            this._id = value;
        }
        else {
            return;
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value) {
            this._name = value.toUpperCase();
        }
        else {
            return;
        }
    }
}
const dataClient = new Client();
dataClient.id = 123;
dataClient.name = 'Maria Ribeiro';
console.log(dataClient);
//# sourceMappingURL=Client.js.map