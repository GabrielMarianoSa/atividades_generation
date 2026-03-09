"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var pilha = [];
var opcao;
do {
    console.log("\n1 - Adicionar Livro");
    console.log("2 - Listar Livros");
    console.log("3 - Retirar Livro");
    console.log("0 - Sair");
    opcao = readline.questionInt("\nDigite uma opcao: ");
    switch (opcao) {
        case 1:
            var livro = readline.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("\nLivro adicionado!");
            console.log("\nPilha:");
            pilha.forEach(function (l) { return console.log(l); });
            break;
        case 2:
            console.log("\nLista de Livros na Pilha:");
            pilha.forEach(function (l) { return console.log(l); });
            break;
        case 3:
            if (pilha.length === 0) {
                console.log("\nA Pilha esta vazia!");
            }
            else {
                pilha.pop();
                console.log("\nUm Livro foi retirado da pilha!");
                console.log("\nPilha:");
                pilha.forEach(function (l) { return console.log(l); });
            }
            break;
        case 0:
            console.log("\nPrograma Finalizado!");
            break;
        default:
            console.log("\nOpcao invalida!");
    }
} while (opcao !== 0);
