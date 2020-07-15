"use strict";
// Membro de classe estático, somente pode ser acessado através da própria classe, e não 
// de uma instância sua.
class Multiply {
    static calculate(n1, n2) {
        return n1 * n2;
    }
}
const result = Multiply.calculate(10, 2);
console.log(result);
//# sourceMappingURL=Multiply.js.map