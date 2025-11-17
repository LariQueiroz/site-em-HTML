const frutasString = "maçã,banana,laranja";

const frutasArray = frutasString.split(",");

const novaString = frutasArray.join(" - ");

console.log("String original:", frutasString);
console.log("Array:", frutasArray);
console.log("Nova string:", novaString);