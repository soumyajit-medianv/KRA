class Person {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("Soumyajit");
console.log(p1.name);
