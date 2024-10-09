// Vetor que mapeia as categorias na ordem: A, B, C, D, E, F, G
const pontuacoesCategorias = [
  "Fantasia",                  // A
  "Ficção Científica / Distopia", // B
  "Romance",                   // C
  "Drama / Realismo",          // D
  "Outros (Biografia / Histórico)", // E
  "Outros (Clássico)",         // F
  "Outros (Fantasia / Épico)"  // G
];

// Variáveis para armazenar a pontuação de cada categoria de livro
let pontuacaoFantasia = 0;          // Fantasia
let pontuacaoFiccaoCientifica = 0;  // Ficção Científica / Distopia
let pontuacaoRomance = 0;           // Romance
let pontuacaoDrama = 0;             // Drama / Realismo
let pontuacaoOutrosBiografia = 0;   // Outros (Biografia / Histórico)
let pontuacaoOutrosClassico = 0;    // Outros (Clássico)
let pontuacaoOutrosFantasiaEpico = 0; // Outros (Fantasia / Épico)

// Vetor de pontuação para cada pergunta com pesos diferentes (baseados na quantidade de livros relacionados)
const pergunta1 = [5, 3, 4, 2, 6, 2, 7];  // Pergunta 1
const pergunta2 = [3, 4, 5, 2, 2, 4, 6];  // Pergunta 2
const pergunta3 = [4, 5, 2, 3, 3, 2, 5];  // Pergunta 3
const pergunta4 = [6, 2, 5, 3, 3, 5, 7];  // Pergunta 4
const pergunta5 = [5, 4, 3, 6, 2, 3, 7];  // Pergunta 5
const pergunta6 = [3, 5, 4, 2, 3, 6, 5];  // Pergunta 6
const pergunta7 = [4, 3, 5, 4, 2, 5, 6];  // Pergunta 7
const pergunta8 = [7, 3, 5, 4, 2, 7, 4];  // Pergunta 8

// Função para calcular a pontuação com base nas respostas do questionário
function calcularPontuacao() {
  // Itera sobre todas as perguntas (de 1 a 8)
  for (let i = 1; i <= 8; i++) {
    const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      const valorResposta = respostaSelecionada.value;
      const indiceResposta = "ABCDEFG".indexOf(valorResposta);

      // Atualiza a pontuação de acordo com a resposta
      switch (indiceResposta) {
        case 0: pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta); break; // Fantasia
        case 1: pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta); break; // Ficção Científica
        case 2: pontuacaoRomance += obterPontuacaoPorPergunta(i, indiceResposta); break; // Romance
        case 3: pontuacaoDrama += obterPontuacaoPorPergunta(i, indiceResposta); break; // Drama
        case 4: pontuacaoOutrosBiografia += obterPontuacaoPorPergunta(i, indiceResposta); break; // Outros (Biografia)
        case 5: pontuacaoOutrosClassico += obterPontuacaoPorPergunta(i, indiceResposta); break; // Outros (Clássico)
        case 6: pontuacaoOutrosFantasiaEpico += obterPontuacaoPorPergunta(i, indiceResposta); break; // Outros (Fantasia)
      }
    }  
  }

  // Retorna um vetor com a pontuação final de cada categoria
  return [
    pontuacaoFantasia,                // 0: Fantasia
    pontuacaoFiccaoCientifica,        // 1: Ficção Científica / Distopia
    pontuacaoRomance,                 // 2: Romance
    pontuacaoDrama,                   // 3: Drama / Realismo
    pontuacaoOutrosBiografia,         // 4: Outros (Biografia / Histórico)
    pontuacaoOutrosClassico,          // 5: Outros (Clássico)
    pontuacaoOutrosFantasiaEpico       // 6: Outros (Fantasia / Épico)
  ];
}


// Função que retorna a pontuação de uma resposta para uma pergunta específica
function obterPontuacaoPorPergunta(perguntaNumero, indiceResposta) {
  switch (perguntaNumero) {
    case 1:
      return pergunta1[indiceResposta];
    case 2:
      return pergunta2[indiceResposta];
    case 3:
      return pergunta3[indiceResposta];
    case 4:
      return pergunta4[indiceResposta];
    case 5:
      return pergunta5[indiceResposta];
    case 6:
      return pergunta6[indiceResposta];
    case 7:
      return pergunta7[indiceResposta];
    case 8:
      return pergunta8[indiceResposta];
    default:
      return 0;
  }
}
