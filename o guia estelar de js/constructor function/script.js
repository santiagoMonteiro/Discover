// constructor function => create a new object

function Person(name) {
  this.name = name; // o this referencia a instância
  this.walk = () => `${this.name} está andando`;
}

const sant = new Person("Santiago");
const augusto = new Person("Augusto");

console.log(sant.walk());
console.log(augusto.walk());