// Variável para armazenar o índice da pergunta atual
let perguntaAtual = 0;

// Função para mostrar a pergunta atual e esconder as outras
function mostrarPergunta() {
  // Seleciona todos os elementos de pergunta
  const perguntas = document.querySelectorAll(".question");

  // Esconde todas as perguntas
  perguntas.forEach((pergunta, index) => {
    if (index === perguntaAtual) {
      pergunta.classList.remove("d-none"); // Mostra a pergunta atual
    } else {
      pergunta.classList.add("d-none"); // Esconde as outras perguntas
    }
  });

  // Atualiza a visibilidade dos botões de navegação
  atualizarBotoesNavegacao(perguntas.length);
}

// Função para mostrar a próxima pergunta
function proximaPergunta() {
  // Verifica se a pergunta atual foi respondida
  if (perguntaRespondida()) {
    // Incrementa o índice da pergunta atual
    perguntaAtual++;
    // Chama a função para atualizar a exibição das perguntas
    mostrarPergunta();
  } else {
    alert("Por favor, responda à pergunta antes de continuar.");
  }
}

// Função para mostrar a pergunta anterior
function perguntaAnterior() {
  // Decrementa o índice da pergunta atual
  perguntaAtual--;
  // Chama a função para atualizar a exibição das perguntas
  mostrarPergunta();
}

// Função para verificar se a pergunta atual foi respondida
function perguntaRespondida() {
  // Seleciona todas as respostas da pergunta atual
  const respostas = document.querySelectorAll(`.question:nth-child(${perguntaAtual + 1}) input`);

  // Verifica se ao menos uma resposta foi marcada
  for (let i = 0; i < respostas.length; i++) {
    if (respostas[i].checked) {
      return true; // A pergunta foi respondida
    }
  }

  return false; // A pergunta não foi respondida
}

// Função para atualizar a visibilidade dos botões de navegação
function atualizarBotoesNavegacao(totalPerguntas) {
  const botaoAnterior = document.getElementById("botaoAnterior");
  const botaoProximo = document.getElementById("botaoProximo");
  const botaoFinalizar = document.getElementById("botaoFinalizar");

  // Se estiver na primeira pergunta, esconde o botão de "Anterior"
  botaoAnterior.style.display = perguntaAtual === 0 ? "none" : "inline-block";

  // Se estiver na última pergunta, esconde o botão de "Próximo" e mostra o botão de "Finalizar"
  if (perguntaAtual === totalPerguntas - 1) {
    botaoProximo.style.display = "none";
    botaoFinalizar.style.display = "inline-block";
  } else {
    botaoProximo.style.display = "inline-block";
    botaoFinalizar.style.display = "none";
  }
}

// Inicializa a exibição da primeira pergunta quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
  mostrarPergunta();
});
