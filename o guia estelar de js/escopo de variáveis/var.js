console.log(">1 existe x antes do bloco: ", x);
// HOISTING // var x;
// var é global e também local
// var não tem escopo de bloco de código
{
  var x = 0;
}

console.log(">2 existe x depois do bloco: ", x);

function test() {
  x = 2;
  console.log(x);
}
test()
console.log(x)