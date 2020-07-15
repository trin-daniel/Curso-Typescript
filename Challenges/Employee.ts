class Employee {
  private supervisors:string[] = []
  constructor(name1: string, name2:string, name3:string){
    this.supervisors = [name1, name2, name3];
  }

  public point(hour: number): string {
    if(hour <= 8){
      return `Ponto normal para ${this.supervisors}`;
    }else{
      return `Fora do horario ${this.supervisors[2]}`;
    }
  }
}

 const results = new Employee('Ricardo', 'Pedro', 'Lucas');
 console.log(results.point(10));