// Part 2: Thinking Methodically

// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects.
// Many methods, including Array methods, require “callback functions” to determine their behavior.

// For the tasks below, use the following data to test your work:

let testData = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.

const sortByAgeYoungestFirst = (array) => {
  return array.sort((a, b) => a.age - b.age);
};

const sortByAgeOldestFirst = (array) => {
  return array.sort((a, b) => b.age - a.age);
};

console.log(sortByAgeYoungestFirst(testData));
console.log(sortByAgeOldestFirst(testData));

// Filter the array to remove entries with an age greater than 50.

const youngerThanFifty = (array) => {
  return array.filter((person) => person.age < 50);
};

console.log(youngerThanFifty(testData));

// Map the array to change the “occupation” key to “job” and increment every age by 1.

const updateArray = (array) => {
  return array.map((person) => {
    person.job = person.occupation;
    delete person.occupation;
    person.age++;
    return person;
  });
};

console.log(updateArray(testData));

// Use the reduce method to calculate the sum of the ages.

const sumOfAges = (array) => {
  return array.reduce((a, b) => a + parseInt(b.age), 0);
};

console.log(sumOfAges(testData));

// Then use the result to calculate the average age.

const averageOfAges = (array) => {
  return array.reduce((a, b) => a + parseInt(b.age), 0) / array.length;
};

console.log(averageOfAges(testData));
