// Exercício 5 - Laço de Repetição DO...WHILE
// Somar números positivos até que seja digitado 0

const readline = require("readline-sync");

let numero;
let soma = 0;

do {
  numero = readline.questionInt("Digite um número: ");

  if (numero > 0) {
    soma = soma + numero;
  }
} while (numero !== 0);

console.log(`A soma dos números positivos é: ${soma}`);
