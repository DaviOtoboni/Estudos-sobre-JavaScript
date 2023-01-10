//do ... while
//mesmo esquema do while, mas com uma mudaça na sintaxe
//a diferença é que o do...while executa o comando pelo menos uma vez

//Exemplo
let contadorY = 0;
do {
    console.log(contador);
    contadorY++;
} while ( contadorY < 0 );// 0

//exemplo2
let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contadorX = 1;
do {
    let dias_atraso = contadorX;
    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;
    let novo_valor_mensalidade = valor_mensalidade + valor_multa;
    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");
    contadorX++;
} while( contadorX < total_dias );
// Dia(s) de atraso: 1 - mensalidade atualizada: R$102,00
// Dia(s) de atraso: 2 - mensalidade atualizada: R$104,00
// Dia(s) de atraso: 3 - mensalidade atualizada: R$106,00
//...


//possivel percorrer uma coleção de dados ou um array
//exemplo
let contadorZ = 0;
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
do {
    console.log(meses[contadorZ]);
    contadorZ++;
} while ( contadorZ < meses.length );


//possivel usar os comando break e continue igualmente


//Sempre que houver a necessidade de executar o bloco de código antes de verificar a condição deve-se usar a estrutura de repetição do .. while, que no mínimo executa o bloco 1 vez