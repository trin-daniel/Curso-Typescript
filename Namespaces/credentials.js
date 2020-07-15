"use strict";
var Account;
(function (Account) {
    function user(name, CPF) {
        return `conta internet bank em nome de ${name}, possuidor do CPF de numeração ${CPF}`;
    }
    Account.user = user;
})(Account || (Account = {}));
//# sourceMappingURL=credentials.js.map