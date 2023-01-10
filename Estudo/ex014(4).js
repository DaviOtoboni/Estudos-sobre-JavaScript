//for
//possui um contador em sua própria sintaxe

//exemplo
let multiplicador = 8;
console.log("Tabuada de multiplicação do Nº " + multiplicador);
//inicialização da var      condição    incremento (ao final de cada repetição)
for ( let contador = 0;contador <= 10; contador++ ) {
    //código que sera executado enquando a condição foi verdadeira
    let resultado = multiplicador * contador;
    console.log( multiplicador + " x " + contador + " = " + resultado );
}
// 8 x 0 = 0
// 8 x 1 = 8
// 8 x 2 = 16
//...


//possivel percorrer uma coleção de dados como um array
