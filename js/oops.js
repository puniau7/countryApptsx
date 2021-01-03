// oops challenges
//http://csbin.io/oop

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  // add code here
  let person1 = {};
  person1.name = name;
  person1.age = age;
  return person1;
}

const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

const personStore = {
  // add code here
  greet: function () {
    console.log("hello");
  },
  introduce: function () {
    console.log("Hi, my name is", this.name);
  },
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  const person3 = Object.create(personStore);
  person3.name = name;
  person3.age = age;
  return person3;
}

const sandra = personFromPersonStore("Sandra", 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {
  // add code here
}
PersonConstructor.prototype.greet = function () {
  console.log("helloooo");
};

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromConstructor(name, age) {
  // add code here
  this.name = name;
  this.age = age;
}
personFromConstructor.prototype.greet = function () {
  console.log("hi, my name is ", this.name);
};

const mike = new personFromConstructor("Mike", 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'
