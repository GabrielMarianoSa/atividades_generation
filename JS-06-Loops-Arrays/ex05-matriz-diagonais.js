// Exercício 9 - Matrizes
// Mostrar diagonais e suas somas

const readline = require("readline-sync");

let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

// leitura da matriz
for (let i = 0; i < 3; i++) {
  matriz[i] = [];

  for (let j = 0; j < 3; j++) {
    matriz[i][j] = readline.questionInt("Digite um numero: ");
  }
}

// diagonal principal
console.log("Elementos da Diagonal Principal:");

for (let i = 0; i < 3; i++) {
  console.log(matriz[i][i]);
  somaPrincipal += matriz[i][i];
}

// diagonal secundaria
console.log("Elementos da Diagonal Secundaria:");

for (let i = 0; i < 3; i++) {
  console.log(matriz[i][2 - i]);
  somaSecundaria += matriz[i][2 - i];
}

console.log("Soma da Diagonal Principal: " + somaPrincipal);
console.log("Soma da Diagonal Secundaria: " + somaSecundaria);
