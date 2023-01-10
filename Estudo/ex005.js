//um array permite colocar mais de um dado dentro de uma mesma var

var arrayzinho = ['Rio de janeiro', 'São Paulo', 'Amazonia'];

console.log(arrayzinho [0]);
//começa a contar do 0 (ex 0, 1, 2, 3, 4, etc.)


//possivel alterar o dado da posição desejada de um array

var nomes = ['Davi', 'Núria', 'Rose', 'Nicolas'];
var alterarnome = 'Pedro';
nomes[4] = alterarnome;

console.log(nomes[4]);//Pedro

//ou

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
linguagens[1] = "Python"; 

console.log(linguagens[1]);

//ou

var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];
console.log(funcionarios);// [ 'Bárbara', 'Carlos', 'Helena', 'Maria', 'Rogério' ]

var novos_funcionarios = [
    "Guilherme",
    "Jéssica"
];

funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios);// [ 'Jéssica', 'Carlos', 'Helena', 'Maria', 'Guilherme' ]



//possivel armazenar tipos de dados diferentes dentro do mesmo array, mas melhor fazer isso com objetos

var tipos = ['String', 10, false]; 

//possivel mostrar a quantidade de elementos dentro de uma array

var aleatorios = ["JavaScript", "PHP", "JAVA", "C#", 'Davi', 'Núria', 'Rose', 'Nicolas'];
console.log(aleatorios.length);//8

//possivel acrescentar dados a um array
//.push

let arr = ["eu", "sou", "muito"];
arr.push("lindo");

console.log(arr);

//praticando arrays

var frases_do_dia = [
    "Sorte é o resultado de muito esforço, trabalho e dedicação",
    "Imagine uma nova história para sua vida e acredite nela",
    "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo",
    "Se existe uma forma de fazer melhor, descubra-a",
    "Seja a mudança que você deseja ver no mundo.",
    "Um objetivo nada mais é do que um sonho com limite de tempo",
    "Você precisa fazer aquilo que pensa que não é capaz de fazer",
    "A persistência é o caminho do êxito.",
    "Concentre-se naquilo que você é bom, delegue todo o resto",
    "A amizade duplica as alegrias e divide as tristezas",
    "O que quer que você lute, você fortalece, e o que você resiste, persiste",
    "Lembre-se: sua verdadeira força, vem de dentro",
    "Nada acontece a menos que sonhemos antes",
    "Para quem ama, qualquer sacrifício é alegria",
    "A paz é a única forma de nos sentirmos realmente humanos",
    "Não existe um caminho para a felicidade. A felicidade é o caminho",
    "O amor é a alegria acompanhada da ideia de uma causa exterior",
    "A criatividade é ilimitada, pois a arte só precisa de motivação",
    "Fé, duas letras que podem mudar sua vida, acredite",
    "Que a vontade de vencer seja minha maior motivação",
    "Nunca subestime o poder de sua visão para mudar o seu mundo",
    "Não coloque limites em seus sonhos. Coloque fé",
    "Tenho certeza de que se eu sorrisse menos teria menos amigos",
    "Não espere por uma crise para descobrir o que é importante em sua vida",
    "Quem sorri sem parar não é alegre, é falso",
    "A alegria de fazer o bem é a única felicidade verdadeira",
    "A alegria evita mil males e prolonga a vida",
    "Coloque fé onde falta coragem",
    "Levanta, sacode a poeira e dá a volta por cima",
    "O que vale a pena possuir, vale a pena esperar",
    "A esperança é o sonho do homem acordado"
];
var data_atual = new Date();
var numero_escolhido = data_atual.getDate();

console.log("Número sorteado: " + numero_escolhido);
numero_escolhido--;

var frase_do_dia = frases_do_dia[numero_escolhido];

console.log("Frase do dia");
console.log("Mensagem: " + frase_do_dia);