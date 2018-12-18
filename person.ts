export class Person {
  name:string = '';
  constructor(name:string){
    this.name = name;
  }

  greeting() {
    console.log(`Hello, ${this.name}`);
  }
}

const glenn = new Person('Glenn');
glenn.greeting();