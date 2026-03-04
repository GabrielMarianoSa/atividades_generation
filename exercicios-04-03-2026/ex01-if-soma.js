// Exercício 1 - Laço Condicional IF
// Verificar se a soma de A + B é maior, menor ou igual a C

const readline = require("readline-sync");

// Entrada do usuário
let numeroA = readline.questionInt("Digite o numero A: ");
let numeroB = readline.questionInt("Digite o numero B: ");
let numeroC = readline.questionInt("Digite o numero C: ");

// Variável do cálculo da soma
let soma = numeroA + numeroB;

// Comparação
if (soma > numeroC) {
  console.log(`${numeroA} + ${numeroB} = ${soma} > ${numeroC}`);
  console.log("A soma de A + B é maior que C");
} else if (soma < numeroC) {
  console.log(`${numeroA} + ${numeroB} = ${soma} < ${numeroC}`);
  console.log("A soma de A + B é menor que C");
} else {
  console.log(`${numeroA} + ${numeroB} = ${soma} = ${numeroC}`);
  console.log("A soma de A + B é igual a C");
}
