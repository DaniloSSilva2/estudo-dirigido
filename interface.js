function alterarCorBotao(botao, cor) {
  botao.style.backgroundColor = cor;
}

function mostrarMensagem(elemento, texto) {
  elemento.textContent = texto;
}

function validarFormulario(nome, email) {
  if (!nome || !email.includes("@")) {
    return "Formulário inválido";
  }
  return "Formulário enviado com sucesso!";
}

module.exports = { alterarCorBotao, mostrarMensagem, validarFormulario };
