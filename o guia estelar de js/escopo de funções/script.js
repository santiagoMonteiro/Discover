sayMyName1();
sayMyName2();
sayMyName3();

function sayMyName1() { // Sofre Hoisting
  console.log("Santiago");
}

const sayMyName2 = function() { // Não Sofre Hoisting
  console.log("Augusto");
}

const sayMyName3 = () => { // Não Sofre Hoisting
  console.log("Monteiro");
}


