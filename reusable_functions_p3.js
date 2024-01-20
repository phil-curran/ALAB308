//  Part 3: Thinking Critically
//  It is important to remember that when working with objects in JavaScript,
//  we can either pass those objects into functions by value or by reference.
//  This important distinction changes the way that functions behave,
//  and can have large impacts on the way a program executes.

// example data:

class Person {
  constructor(name, location, profession, age) {
    this.name = name;
    this.location = location;
    this.profession = profession;
    age == null ? null : (this.age = age);
  }
}

let Phil = new Person("Phil", "Seattle", "Software Engineer");

console.log(Phil);

//  For this section, develop functions that accomplish the following:

//  Take an object and increment its age field.

const incrementAge = (person) => {
  person.hasOwnProperty("age") ? person.age++ : (person.age = 0);
  return person;
};

console.log(incrementAge(Phil));

//  Take an object, make a copy, and increment the age field of the copy. Return the copy.

const copyObject = (name, object) => {
  let temp = { ...object };
  temp.name = name;
  return incrementAge(temp);
};

let newPhil = copyObject("newPhil", Phil);

console.log("newPhil: ", newPhil);

// For each of the functions above, if the object does not yet contain an age field,
// create one and set it to 0.

/* 
    my class constructor and incrementAge functions already do this.
*/

// Also, add (or modify, as appropriate) an updated_at field
// that stores a Date object with the current time.

const updatedAt = (person) => {
  !person.hasOwnProperty("updated_at")
    ? (person.updated_at = new Date())
    : null;
  return person;
};

console.log("Phil: ", Phil);
console.log("plus age and updated_at: ", incrementAge(updatedAt(Phil)));

console.log("newPhil: ", newPhil);
console.log("updatedAt: ", updatedAt(newPhil));

//  Thought experiment: since the Date object is an object, what would happen if we
//  modified it in the copy of the object created in the second function using setTime()
//  or another method? How could we circumvent potentially undesired behavior?

/*  
    Not sure I understand what this question is getting at.  It depends in part on how you
    create the copy; whether it's a shallow or deep copy.  Shallow copies almost seem
    like a quirk of the language, whereas a deep copy behaves like you might expect it to; 
    creating  a distinct, encapsulated copy of the object that you can modify without side 
    effects to the parent class or any other objects created from the parent class.  
    I think the answer is to make sure you create a deep copy, and then before modifying 
    any date or time info, checking to see whether it exists in the copy.
*/
