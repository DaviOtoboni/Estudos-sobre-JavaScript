//objeto literal
//agrupa dados de uma melhor maneira
//quando necessario criar o mesmo dado para mais de uma variavel, melhor usar o objeto

var objetinho = {
    id: 123456789,//propriedades e dados
    nome: 'Davi',
    idade: 21,
    estado: 'são paulo'
};
//imprime no console todos os dados do objetos
console.log(objetinho);
//imprime apenas o dado informado do objeto
console.log(objetinho.nome)


//exemplo do pq usar objetos
var produto = {
    id: 1243124,
    nome: 'macarão',
    valor: 9.992314
};

var cliente = {
    cpf: 333656725,
    nome: "Davi",
    idade: 21
};
//basicamente usei propriedade iguais, porem em dois objetos diferentes, os objetos dão essa liberdad

console.log(produto.valor * cliente.idade); //conta nada haver, só para exemplo 


//coleção de objetos
var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 },//objetos
    { id: 2, nome: "Matemática",    carga_horaria: 220 },//objetos
    { id: 3, nome: "História",      carga_horaria: 160 },//objetos
    { id: 4, nome: "Química",       carga_horaria: 160 },//objetos
    { id: 5, nome: "Inglês",        carga_horaria: 120 }//objetos 
];
console.log( colecao_disciplinas[0].nome);//imprime uma propriedade especifica
console.log( colecao_disciplinas[4]);//imprime o objeto inteiro


//praticando coleção de objetos
var animes_assistidos = [
    {Nome: 'Kimetsu no Yaba', Gostei: 'Sim', Nota: 10},
    {Nome: 'Jujutsu Kaisen', Gostei: 'Sim', Nota: 10},
    {Nome: 'Assassination Classrom', Gostei: 'Não', Nota: 5},
    {Nome: 'Goblin Slayer', Gostei: 'Mais ou menos', Nota: 7},
    {Nome: 'One Piece', Gostei:'Sim', Nota: 10}
];

var quantidadeDe_animes = animes_assistidos.length;

var sorteio = Math.floor(Math.random() * quantidadeDe_animes);

var anime_escolhido = animes_assistidos[sorteio];
console.log(anime_escolhido.Nome);//maneira um de imprimir
console.log(anime_escolhido);//maneira dois de imprimir