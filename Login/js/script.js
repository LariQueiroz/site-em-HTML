function logar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "lar@gmail.com" && senha === "123456") {
        window.location.href = "home.html";
    } else {
        document.getElementById("erro").innerText = "E-mail ou Senha inválidos";
    }
}