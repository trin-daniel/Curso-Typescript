class Single {
  private static instance: Single = new Single;

  private constructor(){}
  static getInstance(): Single{
    return Single.instance;
  }
  now(){
    return new Date();
  }
}

console.log(Single.getInstance().now());