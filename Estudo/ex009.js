//operadores de comparação
//==, !=, <, >, <=, >=, === e !==

var n1 = 2;
var n2 = 3;

//igual
var comparacao = n1 == n2;
console.log(comparacao)

//diferente
var comparacao = n2 != n1;
console.log(comparacao)

//igual estrito (compara tambem o tipo do dado)
var comparacao = n1 === n2;
var comparacao = n1 === "2";
console.log(comparacao)

//desigualdade estrita
var comparacao = n1 !== n2;
var comparacao = n1 !== "2";
console.log(comparacao)

//maior
var comparacao = n1 < n2;
var comparacao = n2 < n1;
console.log(comparacao)

//menor
var comparacao = n1 > n2;
var comparacao = n2 > n1;
console.log(comparacao)

//maior ou igual
var comparacao = n1 <= n2;
var comparacao = n2 <= n1;
console.log(comparacao)

//menor ou igual
var comparacao = n1 >= n2;
var comparacao = n2 >= n1;
console.log(comparacao)