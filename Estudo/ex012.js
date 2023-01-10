//estruturas condicionais   
//if/else
//else/if
//switch
//através das estruturas condicionais, o sistema pode tomar decisões "sozinhas"

//exemplos

//if/else
    if (18 >= 10){
        console.log('True');
    }else {
        console.log('False');
    }

//else/if
    var idade = 50;
    if (idade < 45) {
        console.log('Você ainda esta na idade a flor da pele');
    }else if (idade > 55) {
        console.log('Você já ta veinho em, vai la passar um creme na pele vai');
    }else {
        console.log('Você ta chegando lá, se cuide em');
}

//if/else de uma forma simplificada ou if ternario
    var status = nota > 7 ? "Aprovado" : "Reprovado";
    //                    ? = if       : = else
    var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";
    //                                      ? = if       : = else
    var dia_semana = 5;
    var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//if curto circuito
    const nome = 'Camila';
    //Aqui é verificado se o nome possui ao menos um caractere
    //Retorna true se possuir e false caso contrário
    const nomeValido = nome.length > 0;
    //Imprime o nome no console se for diferente de vazio
    nomeValido && console.log(nome);//declaraçao do if curto circuito

//switch
    var ddd = 11
    switch (ddd) {
        case 11: 
            console.log('São paulo');
            break;
        case 21:
            console.log('Rio de janeiro');
            break;
    }

//switch com multiplas clausulas
    var mes = "Janeiro";
    switch(mes){
        case "Janeiro":
        case "Fevereiro":
        case "Março":
            console.log("Verão");
            break;
        case "Abril":
        case "Maio":
        case "Junho":
            console.log("Outono");
            break;
        case "Julho":
        case "Agosto":
        case "Setembro":
            console.log("Inverno");
            break;
        case "Outubro":
        case "Novembro":
        case "Dezembro":
            console.log("Primavera");
            break;
        default:
            console.log("Mês inválido");
            break;
    }


//praticando estruturas condicionais
let meteoros_trimestre_um = "- Alfa Centaurideos começa em 03/01 e termina em 05/01\n- Gama Normídeos começa em 17/02 e termina em 20/02\n- Pi Pupídeos começa em 25/03 e termina em 29/03";
let meteoros_trimestre_dois   =  "- Líridas começa em 23/05 e termina em 26/05\n- Eta Aquáridas começa em 31/05 e termina em 02/06\n- Bootídeos de Junho começa em 16/06 e termina em 20/06";
let meteoros_trimestre_tres   =  "-   Eta Líridas começa em 19/08 e termina em 22/08\n- Alfa Capricornídeos começa em 13/09 e termina em 17/09";
let meteoros_trimestre_quatro =  "- Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\n- Piscis Austrinídeos começa em 04/12 e termina em 08/12\n- Perseidas começa em 27/12 e termina em 31/12";

let dataAtual = new Date();//informa o dia
let mesAtual = dataAtual.getMonth();//retorna o mês (0 a 11) de uma data.

//  const month = ["January","February","March","April","May","June","July","August","September","October","November",   "December"];
//  const d = new Date();//informa o dia
//  let name = month[d.getMonth()];//retorna o mês (0 a 11) de uma data(por conta do array, vai retornar por estenso)

if (mesAtual == 0  || mesAtual == 1 || mesAtual == 2){
    console.log("As chuvas de meteoros do primeiro trimestre são:\n\n" + meteoros_trimestre_um);
}else if (mesAtual == 3 || mesAtual == 4 || mesAtual == 5){
    console.log("As chuvas de meteoros do segundo trimestre são:\n\n" + meteoros_trimestre_dois);
}else if (mesAtual == 6 || mesAtual == 7 || mesAtual == 8){
    console.log("As chuvas de meteoros do terceiro trimestre são:\n\n" + meteoros_trimestre_tres);
}else if (mesAtual == 9 || mesAtual == 10 || mesAtual == 11){
    console.log("As chuvas de meteoros do quarto trimestre são:\n\n" + meteoros_trimestre_quatro);
}else {
    console.log("Nenhuma chuva de meteoro no período informado");
}