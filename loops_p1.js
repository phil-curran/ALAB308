/* Part 1: Fizz Buzz
To begin, solve the following classic “Fizz Buzz” problem. 
There are a few different ways to do this - experiment with what you think is the most efficient. 
Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working. */ debugger;

let start = 1;

while (start <= 50) {
  if (start % 15 === 0) {
    console.log("Fizz Buzz");
  } else if (start % 3 === 0) {
    console.log("Fizz");
  } else if (start % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(start);
  }
  start++;
}
