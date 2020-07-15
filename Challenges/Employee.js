"use strict";
class Employee {
    constructor(name1, name2, name3) {
        this.supervisors = [];
        this.supervisors = [name1, name2, name3];
    }
    point(hour) {
        if (hour <= 8) {
            return `Ponto normal para ${this.supervisors}`;
        }
        else {
            return `Fora do horario ${this.supervisors[2]}`;
        }
    }
}
const results = new Employee('Ricardo', 'Pedro', 'Lucas');
console.log(results.point(10));
//# sourceMappingURL=Employee.js.map