let number = 1234123123.123123123;
console.log(number.toFixed(2));
console.log(typeof number.toFixed(2));
// toFixed retorna o number como string com as casas decimais limitadas ao argumento;

console.log(number.toFixed(2).replace(".", ","));
// a função replace troca os caracteres do 1° arg. pelos passados no 2° arg.