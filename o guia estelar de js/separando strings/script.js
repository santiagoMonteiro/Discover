let phrase = "Javascript é muito legal";
let myArray = phrase.split(" ");
// o método split retorna um array de textos que foram separados pelo argumento
console.log(myArray)
myArray = myArray.join("_");
// o método join retorna todos os elementos concatenados...
// de um array, e separados pelo argumento passado.
// Se não for passado argumento ele separa a string por ,
console.log(myArray);
