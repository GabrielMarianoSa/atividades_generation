// Exercício 2 - Laço Condicional IF
// Verificar se um número é par ou ímpar e se é positivo ou negativo

const readline = require("readline-sync");

let numero = readline.questionInt("Digite um numero: ");

let tipo;

if (numero % 2 == 0) {
  tipo = "par";
} else {
  tipo = "ímpar";
}

let sinal;

if (numero > 0) {
  sinal = "positivo";
} else {
  sinal = "negativo";
}

console.log(`O número ${numero} é ${tipo} e ${sinal}!`);
