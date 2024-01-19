const finalDataSet = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

let values = Object.values(finalDataSet[0]);

const convertToCSV = (data) => {
  let result = "";
  result += Object.keys(data[0]).toString() + "\\n";
  data.map((row) => (result += Object.values(row).toString() + "\\n"));
  return result;
};

console.log(convertToCSV(finalDataSet));
