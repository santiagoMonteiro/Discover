console.log(">1 existe x antes do bloco: ", x);
// const e let não sofrem hoisting
// const e let só funcionam no escopo que foram criadas
{
  console.log(">2 existe x antes da declaração: ", x);
  let x = 0;
  console.log(">3 existe x depois da declaração e atribuição: ", x);
}

console.log(">4 existe x depois do bloco: ", x);