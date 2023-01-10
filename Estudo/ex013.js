//input

import entradadeDados from 'readline-sync';

           //apelido definido no momento do import.question
let nome = entradadeDados.question('Digite seu nome: ');
console.log("Olá, "+nome);

let idade = entradadeDados.question('Qual é a sua idade: ');
console.log('Entendido, sua idade é '+idade);

//quando for querer usar a operação de soma, é necessario utilizar a função Number() junto (isso ocorre pois os dados são convertios em string e concatenados por causa do '+')
//exemplo

let n1 = entradadeDados.question('Digite um numero: ');
let n2 = entradadeDados.question('Digite mais um numero: ');

let soma = Number(n1) + Number(n2);

console.log('Com os numeros informados(' + n1 + ' e ' + n2 + '), temos um resultado de soma igual a: ' + soma);

//mas caso queira realizar uma operação de subtração/multiplicação/divisão, não é necessario
//exemplo

let x = entradadeDados.question('Digite um valor para x: ');
let y = entradadeDados.question('Digite um valor para y: ');
let multiplicacao = x * y;

console.log('A valor da multiplicação entre esses dois valores de x e y é igual a ' +multiplicacao);

//ou
let z = entradadeDados.question('Digite um valor para z: ');
let a = entradadeDados.question('Digite um valor para a: ');
let divisão = z * a ;

console.log(z + ' multiplicado por ' + a + ' é igual a ' + divisão);



//praticando input
//conversor de milhas em km usando input
//com dados inseridos pelo usuario

console.log('Conversor de milhas para Km');

import dadosDoInput from 'readline-sync';

let milhas = dadosDoInput.question('Digite aqui uma distancia em milhas e iremos converte-la para km: ');
let km = milhas / 0.62137;

console.log(milhas + 'milhas, convertido em km é igual a: '+km);

//descobrindo a area de um triangulo usando input
//com dados inseridos pelo usuario 

console.log('Area do triangulo');

import entradadeDados from 'readline-sync';

let base = entradadeDados.question('Digite a base do triangulo: ');
let altura = entradadeDados.question('Digite a altura do triangulo: ');
let areaTrinagulo = (base * altura) / 2;

console.log('A area deste triangulo é igual a: ' + areaTrinagulo);