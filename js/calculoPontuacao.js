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
    // Seleciona a resposta marcada para a pergunta atual
    const respostaSelecionada = document.querySelector(
      `input[name="q${i}"]:checked`
    );

    // Se há uma resposta selecionada
    if (respostaSelecionada) {
      // Obtém o valor da resposta (A, B, C, etc.)
      const valorResposta = respostaSelecionada.value;

      // Encontra o índice da resposta (A = 0, B = 1, C = 2, etc.)
      const indiceResposta = "ABCDEFG".indexOf(valorResposta);

      // Obtém a categoria correspondente à resposta selecionada
      const categoria = pontuacoesCategorias[indiceResposta];

      // Adiciona a pontuação da resposta à categoria correspondente
      switch (categoria) {
        case "Fantasia":
          pontuacaoFantasia += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Ficção Científica / Distopia":
          pontuacaoFiccaoCientifica += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Romance":
          pontuacaoRomance += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Drama / Realismo":
          pontuacaoDrama += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Outros (Biografia / Histórico)":
          pontuacaoOutrosBiografia += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Outros (Clássico)":
          pontuacaoOutrosClassico += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
        case "Outros (Fantasia / Épico)":
          pontuacaoOutrosFantasiaEpico += obterPontuacaoPorPergunta(i, indiceResposta);
          break;
      }
    }
  }

  // Exibe a pontuação calculada para cada categoria no console
  console.log("Pontuação Final:");
  console.log(`Fantasia: ${pontuacaoFantasia}`);
  console.log(`Ficção Científica / Distopia: ${pontuacaoFiccaoCientifica}`);
  console.log(`Romance: ${pontuacaoRomance}`);
  console.log(`Drama / Realismo: ${pontuacaoDrama}`);
  console.log(`Outros (Biografia / Histórico): ${pontuacaoOutrosBiografia}`);
  console.log(`Outros (Clássico): ${pontuacaoOutrosClassico}`);
  console.log(`Outros (Fantasia / Épico): ${pontuacaoOutrosFantasiaEpico}`);

  // Retorna a pontuação calculada para cada categoria (se necessário)
  return {
    Fantasia: pontuacaoFantasia,
    "Ficção Científica / Distopia": pontuacaoFiccaoCientifica,
    Romance: pontuacaoRomance,
    "Drama / Realismo": pontuacaoDrama,
    "Outros (Biografia / Histórico)": pontuacaoOutrosBiografia,
    "Outros (Clássico)": pontuacaoOutrosClassico,
    "Outros (Fantasia / Épico)": pontuacaoOutrosFantasiaEpico,
  };
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
