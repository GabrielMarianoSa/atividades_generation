// Exercício 1 - Laço de Repetição FOR
// Mostrar números múltiplos de 3 e 5 em um intervalo

const readline = require("readline-sync");

let inicio = readline.questionInt("Digite o primeiro numero do intervalo: ");
let fim = readline.questionInt("Digite o ultimo numero do intervalo: ");

// verificar se o intervalo é válido
if (inicio >= fim) {
  console.log("Intervalo inválido!");
} else {
  console.log(`No intervalo entre ${inicio} e ${fim}:`);

  // laço de repetição
  for (let i = inicio; i <= fim; i++) {
    // verificar múltiplos de 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} é multiplo de 3 e 5`);
    }
  }
}
