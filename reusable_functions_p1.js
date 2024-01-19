// Write functions that accomplish the following:

// Take an array of numbers and return the sum.

let numbers1 = [1, 2, 3, 4, 5];

const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

console.log(sum(numbers1));

// Take an array of numbers and return the average.

const average = (arr) => {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
};

console.log(average(numbers1));

// Take an array of strings and return the longest string.

let string1 = [
  "Short",
  "wombat",
  "Very Long String",
  "S",
  "Another Medium",
  "Longer String Here",
  "dougnut",
  "An Astonishingly Long String",
  "banana",
  "Lengthy String",
];

const longestString = (array) => {
  return array.sort((a, b) => b.length - a.length)[0];
};

console.log(longestString(string1));

/* Take an array of strings, and a number and return an array of the strings 
that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
would return ["hello", "morning"]. */

let string2 = ["say", "hello", "in", "the", "morning"];

const filterStrings = (array, number) => {
  let temp = array.filter((string) => string.length > number);
  array.length > 0 && temp.length > 0
    ? console.log(`Strings longer than ${number}: ${temp.join(", ")}.`)
    : console.log(`No strings in the array are longer than ${number}.`);
};

filterStrings(string1, 8);
filterStrings(string1, 30);
filterStrings(string2, 3);
filterStrings(string2, 7);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

const recursivePrint = (n) => {
  if (n > 0) {
    recursivePrint(n - 1);
    console.log(n);
  }
};

recursivePrint(10);
recursivePrint(100);
