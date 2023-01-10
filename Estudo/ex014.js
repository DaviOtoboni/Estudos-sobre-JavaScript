//Estruturas de repetição
//while
//do/while
//for
//for .. in
//for .. of

//Blocos de codigos que podem ser executados diversas vezes

//Exemplos

//for
for ( let contador = 0; contador < 10; contador++ ){
    console.log("O número é: " + contador);
}//Irá imprimir do "0" ao "9"

let contadorZ = 10;
while ( contador > 0 ) {
    console.log( contador );
    contador--;
}

//while
let contadorX = 0;
while ( contador < 5 ) {
    console.log( contador + " é menor que 5" );
    contador++;
}//irá imprimir a linha de código 17 até o numero ser maior que 5

//do ... while
let contadorP = 0;
do {
    console.log(contador);
    contadorP++;
}while (contadorP < 5);





//Essas estruturas são importantes pois: 
//reaproveitam códigos, evitando duplicações
//executa o mesmo comando N vezes, mesmo sem saber quantas vezes serão



//As vezes é necessario interromper um loop em uma estrutura de repetição e para isso existem duas maneiras

//Comando break
//exemplo
let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];
let contador = 0;
let encontrouHabilitado = false;
while ( contador < funcionarios.length ) {
    let funcionario = funcionarios[contador];
    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }
    contador++;
}
if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}
// Funcionário habilitado encontrado: Renan

//Comando continue
//exemplo
let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contadorB = 0;
while ( contadorB < alunos.length ) {
    let aluno = alunos[contadorB];
    contadorB++;
    if ( aluno.media < 6 ) {//mesmo se a media for <6 ele vai passar pelos outros dados
        continue;
    }
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
}

//diferente do 'break', o 'continue' continua o loop dentro do bloco, enquanto o break não

//Caso seja necessário iterar todos os elementos da coleção, use o comando continue. Agora se o objetivo for encontrar apenas um único elemento que atenda a uma determinada condição, o comando break é a melhor opção.

