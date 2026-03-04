// Exercício 7 - Laço Condicional Switch
// Calculadora simples

const readline = require("readline-sync");

let numero1 = readline.questionFloat("Digite o primeiro número: ");
let numero2 = readline.questionFloat("Digite o segundo número: ");
let operacao = readline.questionInt("Operação (1-4): ");

let resultado;

switch (operacao) {
  case 1:
    resultado = numero1 + numero2;
    console.log(`${numero1} + ${numero2} = ${resultado}`);
    break;

  case 2:
    resultado = numero1 - numero2;
    console.log(`${numero1} - ${numero2} = ${resultado}`);
    break;

  case 3:
    resultado = numero1 * numero2;
    console.log(`${numero1} * ${numero2} = ${resultado}`);
    break;

  case 4:
    resultado = numero1 / numero2;
    console.log(`${numero1} / ${numero2} = ${resultado}`);
    break;

  default:
    console.log("Operação inválida!");
}
