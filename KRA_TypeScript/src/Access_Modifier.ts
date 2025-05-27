// Access Modifier (public, private, and protected)

// private (Accessible only inside the same class. Not accessible outside or by subclasses (child classes).)
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposite(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposite(500);
console.log("Current balance: ", myAccount.getBalance());
// console.log(myAccount.balance); // Property 'balance' is private and only accessible within class 'BankAccount'.


// protected (Accessible inside the class and in child (derived) classes. Not accessible outside the class.)
class Fruit {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected describe(): void {
        console.log(`Fruit name is ${this.name}.`);
    }
}

class Apple extends Fruit {
    private color: string;

    constructor(name: string, color: string) {
        super(name); // call parent class constructor
        this.color = color;
    }

    showDetails(): void {
        console.log(`Apple Name: ${this.name}, Color: ${this.color}.`);
        super.describe(); // calling protected method
    }
}

const myApple = new Apple("Ambri", "Red");
myApple.showDetails();
// console.log(myApple.name); // Property 'name' is protected and only accessible within class 'Fruit' and its subclasses.
// console.log(myApple.describe());

