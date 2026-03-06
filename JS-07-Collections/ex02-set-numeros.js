// Exercício 3 - Collection Set
// Ler 10 números e armazenar em um Set

const readline = require("readline-sync");

let numeros = new Set();

// ler 10 números
for (let i = 0; i < 10; i++) {
  let numero = readline.questionInt("Digite um numero: ");
  numeros.add(numero);
}

console.log("\nListar dados do Set:");

for (let num of numeros) {
  console.log(num);
}
