import * as readline from "readline-sync";

let fila: string[] = [];
let opcao: number;

do {
  console.log("\n1 - Adicionar Cliente");
  console.log("2 - Listar Clientes");
  console.log("3 - Chamar Cliente");
  console.log("0 - Sair");

  opcao = readline.questionInt("\nDigite uma opcao: ");

  switch (opcao) {
    case 1:
      let nome = readline.question("Digite o nome do cliente: ");
      fila.push(nome);

      console.log("\nCliente Adicionado!");
      console.log("\nFila:");

      fila.forEach((cliente) => console.log(cliente));

      break;

    case 2:
      console.log("\nLista de Clientes na Fila:");

      fila.forEach((cliente) => console.log(cliente));

      break;

    case 3:
      if (fila.length === 0) {
        console.log("\nA fila esta vazia!");
      } else {
        fila.shift();

        console.log("\nO Cliente foi Chamado!");

        console.log("\nFila:");

        fila.forEach((cliente) => console.log(cliente));
      }

      break;

    case 0:
      console.log("\nPrograma Finalizado!");
      break;

    default:
      console.log("\nOpcao invalida!");
  }
} while (opcao !== 0);
