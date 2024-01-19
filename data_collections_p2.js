/*Part 2: Expanding Functionality
Now that you are familiar with your code, and perhaps have improved it, 
it is time to expand upon its functionality.

Begin with the following task:

Declare a variable that stores the number of columns in each row of data within the CSV.

Instead of hard-coding four columns per row, expand your code to accept any number of columns. 

This should be calculated dynamically based on the first row of data.

For example, if the first row of data (the headings) has eight entries,
your program should create eight entries per row.
You can safely assume that all rows that follow will contain the same number of entries per row.

After you have implemented the above:

Store your results in a two-dimensional array.

Each row should be its own array, with individual entries for each column.

Each row should be stored in a parent array, with the heading row located at index 0.

Cache this two-dimensional array in a variable for later use.

Using the original CSV example data, here is what the result of this step should look like:

ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

becomes

[["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor’s Assistant", "26"]] */

// My original solution accomplished this:

let string =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let table = string.split("\n");
let tableRows = table.map((row) => row.split(","));

console.log(table);
console.log(tableRows);