var Account;
(function (Account) {
    function user(name, CPF) {
        return "conta internet bank em nome de " + name + ", possuidor do CPF de numera\u00E7\u00E3o " + CPF;
    }
    Account.user = user;
})(Account || (Account = {}));
///<reference path="credentials.ts"/>
var account = Account.user('Rafael Limeira', '359.456.765-23');
console.log(account);
