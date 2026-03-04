// Exercício 5 - Laço Condicional Switch
// Sistema de pedido de lanchonete

const readline = require("readline-sync");

let codigo = readline.questionInt("Codigo do produto: ");
let quantidade = readline.questionInt("Quantidade: ");

let produto;
let preco;

switch (codigo) {
  case 1:
    produto = "Cachorro Quente";
    preco = 10;
    break;

  case 2:
    produto = "X-Salada";
    preco = 15;
    break;

  case 3:
    produto = "X-Bacon";
    preco = 18;
    break;

  case 4:
    produto = "Bauru";
    preco = 12;
    break;

  case 5:
    produto = "Refrigerante";
    preco = 8;
    break;

  case 6:
    produto = "Suco de laranja";
    preco = 13;
    break;

  default:
    console.log("Código inválido!");
    return;
}

let total = quantidade * preco;

console.log(`Produto: ${produto}`);
console.log(`Valor total: R$ ${total}`);
