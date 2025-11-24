const livros = [
    "A Hipótese do Amor",
    "Como Eu Era Antes de Você",
    "A culpa é das Estrelas",
    "Cinquenta Tons de Cinza",
    "Orgulho e Preconceito"
];

function pesquisarLivro() {
    const campo = document.getElementById("pesquisar").value.toLowerCase();
    const resultado = document.getElementById("pesquisarLivro");

    if (campo === "") {
        resultado.textContent = "Digite o nome de um livro!";
        resultado.style.color = "red";
        return;
    }

    const encontrado = livros.some(livro => livro.toLowerCase() === campo);

    if (encontrado) {
        resultado.textContent = " Livro encontrado!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = " Livro não encontrado!";
        resultado.style.color = "red";
    }
}