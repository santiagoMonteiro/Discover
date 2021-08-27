let techs = ["html", "css", "js"];

// adicionar item ao fim
techs.push("nodejs");
// adicionar item ao começo
techs.unshift("sql");
// remover item do final
techs.pop();
// remover item do começo
techs.shift();

// pegar somente alguns elementos do array
const part = techs.slice(1, 3); // método não mutável
console.log(part);

// remover 1 ou mais itens de qualquer posição do array
techs.splice(1, 2); // a partir do índice 1, retirar 2 elementos
console.log(techs);

techs = ["html", "css", "js"];
techs.splice(1, 2, "Mongo", "Sass", "React");

console.log(techs);

techs = ["html", "css", "js"];
const indexCss = techs.indexOf("css"); // retorna o índice do "css", se não encontrar retorna -1
console.log(indexCss);
console.log(techs.indexOf("angular"));
