/*Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/

const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Informe a primeira  nota da avaliação semestral: "));
let nota2 = parseFloat(prompt("Informe a segunda nota da avaliação semestral..: "));

let media = (nota1 + nota2) / 2;
console.log("-----------------------------------------------")
if (media>= 6.0) {
    console.log("PARABÉNS! Você foi aprovado");
    console.log("Sua média do semestre foi: "+media);
} else {
    console.log("Você foi REPROVADO! Estude mais");
    console.log("Sua média do semestre foi: "+media);
}