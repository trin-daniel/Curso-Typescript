// Declaração de namespaces.
namespace Area {
  const PI = 3.1415;

  export function circumference(lightning: number):number {
    return PI * (Math.pow(2, lightning));
  }

  export function rectagle(base: number, height: number):number {
    return base * height;
  }
}

console.log(Area.circumference(4));
console.log(Area.rectagle(10, 30));

// Namespaces aninhados(um contido no outro).
namespace Logon {
  export namespace Identity{
    const name = 'Rodrigo';
    const lastName = 'Reids';
    const age = 23;

    export function credential(): string{
      return `${name} ${lastName} possui ${age} anos`;
    }
  }
}

console.log(Logon.Identity.credential());