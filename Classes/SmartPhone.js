"use strict";
// Classe abstrata, esta servindo como uma abstração, um modelo.
// iPhone é um filho, que estende as responsabilidades de seu pai, como obrigação.
class SmartPhone {
    constructor() {
        this.phoneNumber = 0;
    }
    called() {
        return `Você está efetuando uma ligação para o número ${this.phoneNumber}`;
    }
}
class Iphone extends SmartPhone {
    execute(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
const phone = new Iphone();
phone.execute(455675439);
console.log(phone.called());
//# sourceMappingURL=SmartPhone.js.map