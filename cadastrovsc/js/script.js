document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCadastro");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const usuario = {
      nome: document.getElementById("nome").value.trim(),
      email: document.getElementById("email").value.trim(),
      senha: document.getElementById("senha").value.trim(),
      perfil: document.getElementById("perfil").value,
      endereco: document.getElementById("endereco").value.trim(),
      bairro: document.getElementById("bairro").value.trim(),
      complemento: document.getElementById("complemento").value.trim(),
      cep: document.getElementById("cep").value.trim(),
      cidade: document.getElementById("cidade").value.trim(),
      estado: document.getElementById("estado").value.trim()
    };

    if (!usuario.nome || !usuario.email || !usuario.senha) {
      alert("Preencha Nome, Email e Senha!");
      return;
    }

    if (usuario.senha.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    console.log("Usuário cadastrado:", usuario);

    alert("Usuário cadastrado com sucesso!");

    form.reset();
  });
});
