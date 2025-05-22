let str = "Soumyajit";
console.log(str.length);

// The charAt() method returns the character at a specified index (position) in a string.
console.log(str.charAt(2));

// The charCodeAt() method returns the code of the character at a specified index in a string.
console.log(str.charCodeAt(0));

// slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Mango";
let sliceArr = text.slice(7, 13);
console.log(sliceArr);

// substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
let substring = text.substring(7);
console.log(substring);

// substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
let extractedPart = text.substr(7, 6);
console.log(extractedPart);

// toUpperCase()
let str_1 = "Hello";
console.log(str_1.toUpperCase());

// toLowerCase()
let str_2 = "WORld";
console.log(str_2.toLowerCase());

// concat() - concat() joins two or more strings.
let text1 = "Hello";
let text2 = "World";
let temp = text1.concat(" ", text2);
console.log(temp);

// trim() - The trim() method removes whitespace from both sides of a string.
let text3 = "            Earth     ";
console.log(text3.trim());

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text4 = "        Media NV";
console.log(text4.trimStart());

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text5 = "    media nv   ";
console.log(text5.trimEnd());

// The repeat() method returns a string with a number of copies of a string. The repeat() method returns a new string.
let text6 = "Hello World";
let ans = text6.repeat(2)
console.log(ans);

// The replace() method replaces a specified value with another value in a string:
let str1 = "Hello World";
let res = str1.replace("World", "Earth");
console.log(res);

// The replace() method replaces a specified value with another value in a string.
let str2 = "HELLO";
console.log(str2.split(''));

// The padStart() method pads a string from the start. It pads a string with another string (multiple times) until it reaches a given length.
let str3 = "5";
let padded = str3.padStart(4, "0");
console.log(padded);

// The padEnd() method pads a string from the end. It pads a string with another string (multiple times) until it reaches a given length.
let str4 = "5";
let pad = str4.padEnd(4, "0");
console.log(pad);

