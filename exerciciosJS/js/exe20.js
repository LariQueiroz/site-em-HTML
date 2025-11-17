const frase = "JavaScript é incrível";

const tamanho = frase.length;

const maiuscula = frase.toUpperCase();
const minuscula = frase.toLocaleLowerCase();

const primeiro = frase.charAt(0);
const ultimo = frase.charAt(frase.length - 1);

const posicao = frase.indexOf("é");

console.log("Tamanho:", tamanho);
console.log("Maiúscula:", maiuscula);
console.log("Minúscula:", minuscula);
console.log("Promeiro caractere:", primeiro);
console.log("Último caractere", ultimo);
console.log("Posição do caractere: é", posicao);