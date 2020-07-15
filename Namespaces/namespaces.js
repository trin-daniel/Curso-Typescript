"use strict";
// Declaração de namespaces.
var Area;
(function (Area) {
    const PI = 3.1415;
    function circumference(lightning) {
        return PI * (Math.pow(2, lightning));
    }
    Area.circumference = circumference;
    function rectagle(base, height) {
        return base * height;
    }
    Area.rectagle = rectagle;
})(Area || (Area = {}));
console.log(Area.circumference(4));
console.log(Area.rectagle(10, 30));
// Namespaces aninhados(um contido no outro).
var Logon;
(function (Logon) {
    let Identity;
    (function (Identity) {
        const name = 'Rodrigo';
        const lastName = 'Reids';
        const age = 23;
        function credential() {
            return `${name} ${lastName} possui ${age} anos`;
        }
        Identity.credential = credential;
    })(Identity = Logon.Identity || (Logon.Identity = {}));
})(Logon || (Logon = {}));
console.log(Logon.Identity.credential());
//# sourceMappingURL=namespaces.js.map