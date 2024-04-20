/*Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/

let contador=1;
let primos = 100;

while (contador <= 50) {
    let compara = 0;
    for (let index = 0; index < 1000; index++) {
        if ( primos % index === 0) {
           compara++
        }
        
    }
    if (compara <=2){

        console.log(primos);
        contador++
        primos++
    }
    else{
        primos++
    }
}