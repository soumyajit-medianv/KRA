// The this keyword in JavaScript refers to the object that is executing the current function. The value of this depends on how a function is called, not where it is defined. 

// In the global scope, this refers to the global object. (In a browser, it’s window.)
console.log(this);

// Inside a Regular Function "this" refers to the global object (window in browsers).
function fn() {
    console.log(this);
}
fn();

// When a function is called as an object’s method, this refers to the calling object.
const obj = {
    name: "Soumyajit",
    show: function () {
        console.log(this);
    }
}

obj.show();

// Arrow functions do not have their own this.
const arrowObj = {
    name: "John",
    show: () => {
        console.log(this);
    }
}

arrowObj.show();

// In an arrow function, this takes the value from the outer function or context where the arrow function is written.
const arrObj = {
    name: "Alice",
    show: function () {
        const arrowFunc = () => {
            console.log(this);
        }
        arrowFunc();
    }
}

arrObj.show();

// When a function is used as a constructor with new, this refers to the newly created object. 
function Person(name) {
    this.name = name;
}

const p1 = new Person("Soumyajit");
console.log(p1.name);
