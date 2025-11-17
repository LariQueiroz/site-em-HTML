const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(numero => numero * 2);

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 28 }
];

const nomes = pessoas.map(pessoa => pessoa.nome);

console.log("Quadrados:", quadrados);
console.log("Nomes:", nomes);