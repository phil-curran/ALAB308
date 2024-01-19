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
  console.log(temp);
  return temp;
};

makeObjects(exampleData);
