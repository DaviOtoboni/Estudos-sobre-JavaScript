//exemplo da estrutura while percorrendo um array

let materiais = ["ferro", "madeira", "borracha", "plastico"];
let contador = 0;
while (contador <= 3){
    console.log("Material de "+ materiais[contador]);
    contador++
}


//while junto a uma estrutura de CONDIÇÃO(verifica quais números de um array são pares ou ímpares.)

let numeros = [10, 5, 7, 8, 9, 6, 12, 4];
let total_impares = 0;
let total_pares = 0;
let contadorA = 0;
while ( contadorA < numeros.length ) {
    if( numeros[contadorA] % 2 == 0 ){//"%" irá dar o resto da divisão por 2
        total_pares++;
    } else {
        total_impares++;
    }
    contadorA++;
}
console.log(" O total de números ímpares: " + total_impares);// O total de números ímpares: 3
console.log(" O total de números pares: " + total_pares);// O total de números pares: 5


//Para que o loop while funcione corretamente é necessário usar um contador que deve ser incrementado dentro do bloco. Esse contador é o mesmo presente na condição dessa estrutura de repetição. Sem esse contador, o bloco não funciona da forma esperada.