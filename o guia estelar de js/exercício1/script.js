let weight;
// o tipo de dado de weight é undefined
console.log(typeof weight);

const name = "Santiago";
const age = 19;
const stars = 4.7;
const isSubscribed = true;

let student = {};
// the data-type of student is object
console.log(typeof student);

student.name = "Santiago";
student.age = 19;
student.stars = 4.7;
student.isSubscribed = true;

student.weight = 55;

console.log(student);
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

const students = [];
students.push(student);

console.log(students);
console.log(students[0]);

let studentNew = {
  name: "Augusto",
  age: 25,
  stars: 5,
  isSubscribed: true,
  weight: 65,
}

students.push(studentNew)
console.log(students);

// const array = [];
// array[0] = 1;
// array[1] = 2;

// console.log(array);

// not give error

console.log(a);
var a = 2;