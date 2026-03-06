// Exercício 1 - Collection Array
// Ler 5 cores e mostrar normal e ordenado

const readline = require("readline-sync");

let cores = [];

// ler 5 cores
for (let i = 0; i < 5; i++) {
  let cor = readline.question("Digite uma cor: ");
  cores.push(cor);
}

console.log("\nListar todas as cores:");

for (let cor of cores) {
  console.log(cor);
}

// ordenar cores
cores.sort();

console.log("\nOrdenar as cores:");

for (let cor of cores) {
  console.log(cor);
}
