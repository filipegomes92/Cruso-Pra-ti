/*Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.*/

const prompt = require("prompt-sync")();

let qtdEleitores    = parseInt(prompt("Informe a quantidade total de eleitores: "));
let qtdVotosBranco  = parseInt(prompt("Informe a quantidade de votos em branco: "));
let qtdVotosNulos   = parseInt(prompt("Informe a quantidade de votos nulos....: "));
let qtdVotosValidos = parseInt(prompt("Informe a quantidade de votos Válidos..: "));

qtdVotosBranco = parseFloat((qtdVotosBranco / qtdEleitores) * 100);
qtdVotosNulos  = parseFloat((qtdVotosNulos/qtdEleitores) * 100);
qtdVotosValidos= parseFloat((qtdVotosValidos/qtdEleitores) * 100);
console.log("-----------------------------------------------");
console.log("O percentual de votos brancos é.: "+qtdVotosBranco);
console.log("O percentual de votos nulos  é..: "+qtdVotosNulos);
console.log("O percentual de votos válidos é.: "+qtdVotosValidos);
