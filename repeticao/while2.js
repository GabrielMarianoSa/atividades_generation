const leia = require("readline-sync");

let senhaCorreta = "1234";
let senhaDigitada = "";

while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = leia.question("Digite a senha: ");
}

console.log("Acesso liberado");
