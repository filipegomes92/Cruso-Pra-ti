/*Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:*/

const prompt = require("prompt-sync")();



for (let index = 1; index <= 5; index++) {
    let n = parseFloat(prompt("infome um valor: "));
    for (let index = 0; index <n; index++) {
         let tabuada = (index + 1 ) * n ;      
        console.log((index + 1) +" X "+n+" = "+tabuada);
    }
    
}