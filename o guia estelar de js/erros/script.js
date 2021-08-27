function saymyName(name ="") {
  if (name === "") {
    throw new Error("Nome é obrigatório"); // o throw para o fluxo da função;
  }

  console.log(name);
}


try {
  sayMyName();
} catch (err) { // o catch captura o que é lançado pelo throw;
  console.log(err);
}
console.log("após o try/catch");