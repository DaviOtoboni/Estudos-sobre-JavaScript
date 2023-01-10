//operadores aritméticos
// +, -, *, /, %

//% retorna o resto de uma divisão
//possivel usar para verificar se o numero é par ou não
var n1 = 3;
var n2 = 2;
var restoDivisao1 = n1 % n2;
console.log(restoDivisao1);

var restoDivisao2 = 10 % 3;
console.log(restoDivisao2);

//+ soma numeros ou concatena strings
var soma = 1 + 23;
console.log(soma);

var concatenando = 'texto 1' + 'texto 2';
console.log(concatenando);

//quando soma uma string com outro tipo de dado, o dado se transforma em uma string
console.log("texto" + 20);
console.log("texto" + true);