const { alterarCorBotao, mostrarMensagem, validarFormulario } = require('./interface');
require('@testing-library/jest-dom');

describe('Testes de Frontend com Jest', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="botao">Clique</button>
      <p id="mensagem"></p>
    `;
  });

  test('altera a cor do botão', () => {
    const botao = document.getElementById('botao');
    alterarCorBotao(botao, 'red');
    expect(botao.style.backgroundColor).toBe('red');
  });

  test('exibe mensagem no parágrafo', () => {
    const mensagem = document.getElementById('mensagem');
    mostrarMensagem(mensagem, 'Olá, usuário!');
    expect(mensagem).toHaveTextContent('Olá, usuário!');
  });

  test('valida formulário corretamente', () => {
    expect(validarFormulario('Ana', 'ana@email.com')).toBe('Formulário enviado com sucesso!');
    expect(validarFormulario('Carlos', 'carlossemarroba')).toBe('Formulário inválido');
    expect(validarFormulario('', 'teste@gmail.com')).toBe('Formulário inválido');
  });
});
