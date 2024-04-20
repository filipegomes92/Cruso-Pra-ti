/*Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:
1- Sul     5 ou 6 - Nordeste
2- Norte   7,8 ou 9 - Sudeste
3- Leste   10 até 20 - Centro-Oeste
4- Oeste   25 até 50 - Nordeste
Fora dos intevalos - Produto Importado */

const prompt =  require("prompt-sync")();

let codigoProduto = parseInt(prompt("Informe o código do produto: "));

if (codigoProduto === 1) {
    console.log("Este Produto é da Região Sul");   
} else if (codigoProduto === 2){
    console.log("Este Produto é da Região Norte");
} else if (codigoProduto === 3){
    console.log("Este Produto é da Região Leste");
}else if (codigoProduto === 4){
    console.log("Este Produto é da Região Oeste");
}else if (codigoProduto === 5 || codigoProduto === 6 || codigoProduto >= 25 && codigoProduto <= 50 ){
    console.log("Este Produto é da Região Nordeste");
}else if (codigoProduto >=7 && codigoProduto <= 9 ){
    console.log("Este Produto é da Região Sudeste");
}else if (codigoProduto >= 10 && codigoProduto <=20){
    console.log("Este Produto é da Região Centro-Oeste");
}else{
    console.log("Este Produto é Importado");
}
