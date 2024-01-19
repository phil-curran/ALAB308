const exampleData = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];

const makeObjects = (exampleData) => {
  let objectKeys = exampleData[0].map((key) => key.toLowerCase());
  let temp = [];
  for (let i = 1; i < exampleData.length; i++) {
    let obj = {};
    for (let j = 0; j < objectKeys.length; j++) {
      obj[objectKeys[j]] = exampleData[i][j];
    }
    temp.push(obj);
  }
  return temp;
};

let output = makeObjects(exampleData);

let addition1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
let addition2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };

output.pop();
output.splice(1, 0, addition1);
output.push(addition2);

const getAverageAge = (output) => {
  let sum = 0;
  output.map((person) => {
    sum += parseInt(person.age);
  });
  return sum / output.length;
};

console.log(getAverageAge(output));
