// Exercício 3 - Laço de Repetição WHILE
// Contar pessoas menores de 21 e maiores de 50 anos

const readline = require("readline-sync");

let idade = readline.questionInt("Digite uma idade: ");

let menores21 = 0;
let maiores50 = 0;

while (idade >= 0) {
  if (idade < 21) {
    menores21++;
  }

  if (idade > 50) {
    maiores50++;
  }

  idade = readline.questionInt("Digite uma idade: ");
}

console.log(`Total de pessoas menores de 21 anos: ${menores21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`);
