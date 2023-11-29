
// Função para simular o efeito de máquina de escrever
function maquinaEscrever(texto, elemento, velocidade) {
  var i = 0;
  var intervalo = setInterval(function() {
    // Adiciona o próximo caractere ao texto
    elemento.textContent += texto.charAt(i);
    i++;

    // Verifica se todo o texto foi digitado
    if (i > texto.length) {
      clearInterval(intervalo);
    }
  }, velocidade);
}

// Chamada da função com o texto desejado
var textoParaDigitar = 'Este é um efeito de máquina de escrever!';
var elementoTexto = document.getElementById('texto-maquina');

// Velocidade em milissegundos (quanto menor o valor, mais rápido o efeito)
var velocidadeDigitacao = 50;

// Inicia o efeito de máquina de escrever
maquinaEscrever(textoParaDigitar, elementoTexto, velocidadeDigitacao);
