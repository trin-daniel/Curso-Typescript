// Metodo menos verboso.
class User {
  constructor(
    public name: string, 
    public email:string, 
    public password:string
    ){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const isUser = new User('Diego Silva', 'diego@nwaway.com', '332112323');
console.log(isUser);