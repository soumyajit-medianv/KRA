// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

// Numeric enums
enum Direction {
  East,
  West,
  North,
  South,
}

// By default, enums will initialize the first value to 0 and add 1 to each additional value:
let currentDirection = Direction.East;
console.log(currentDirection);
console.log(Direction.West);

// currentDirection = "Hello"; // Type '"Hello"' is not assignable to type 'Direction'.
// currentDirection is of type Direction (an enum).
// "Hello" is a string, not a member of the Direction enum.
// So this is a type error in TypeScript.

currentDirection = Direction.West;
console.log(currentDirection);

// Reverse Mapping
// In numeric enums, TypeScript automatically allows you to look up both:
// The value from the key, and
// The key from the value
// Reverse mapping does not work with string enums, only with numeric enums.
console.log(Direction.South);
console.log(Direction[3]);

// Numeric Enums - Initialized
enum Week {
  Monday = 10,
  Tuesday,
  Wednesday,
}

console.log(Week.Monday);
console.log(Week[10]);
console.log(Week.Tuesday);

// Numeric Enums - Fully Initialized
enum StatusCode {
  Success = 200,
  NotFound = 404,
  BadRequest = 400,
}

console.log(StatusCode.Success);

console.log(StatusCode);
// Behind the scenes, the enum looks like
// {
//   '200': 'Success',
//   '400': 'BadRequest',
//   '404': 'NotFound',
//   Success: 200,
//   NotFound: 404,
//   BadRequest: 400
// }

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

enum StringDirection {
    East = 'East',
    West = 'West',
    North= 'North',
    South = 'South'
}

console.log(StringDirection.East);
console.log(StringDirection['West']);
console.log(StringDirection);
