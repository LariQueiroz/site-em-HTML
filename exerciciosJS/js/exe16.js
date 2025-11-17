function saudar(nome = "Larissa", idade = 16){
    return `Olá ${nome}, você tem ${idade} anos`;
}

const calacularDesconto = (preco, desconto = preco/100) => {
    return preco - (preco * desconto / 100);
};

console.log(saudar());
console.log(saudar("Ana"));
console.log(("Carlos", 30));
console.log("Preço com desconto:", calcularDesconto(100));