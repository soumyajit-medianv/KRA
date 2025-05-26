// An interface is used to define the shape of an object. It's best for object-like structures.

interface Address {
  country: string;
  state: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address?: Address;
}

let user1: User = {
  name: "John Doe",
  age: 25,
  address: {
    country: "ABC",
    state: "XYZ",
    pincode: 465487,
  },
};

console.log(user1);
