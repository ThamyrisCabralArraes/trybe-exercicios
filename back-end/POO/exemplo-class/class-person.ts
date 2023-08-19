class Person {
  name: string;
  age: number;
  weight?: number;

  constructor(n: string, a: number, w?: number) {
    console.log(`create a person ${n}`);
    this.name = n;
    this.age = a;
    this.weight = w ?? 190;
  }

  sleep() {
    console.log(`${this.name}: zzzzz`);
  }
}

const p1 = new Person('Thamyris', 34, 72);
const p2 = new Person('Carlos', 37);

console.log(p1.name, p1.age, p1.weight);
console.log(p2.name, p2.age, p2.weight);
p1.sleep();
p2.sleep();

class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string;
  connectedTo?: string;

  constructor(b: string, s: number, r: number, c: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn() {
    console.log(this.brand, this.size, this.resolution, this.connections);
  }
}

const newTv = new Tv('LG', 60, 4.4, 'HDMI');
newTv.turnOn();
