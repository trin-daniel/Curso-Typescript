namespace Account {
  export function user(name: string, CPF: string): string {
    return `conta internet bank em nome de ${name}, possuidor do CPF de numeração ${CPF}`;
  }
}