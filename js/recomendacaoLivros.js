// Vetores separados por categoria
const categorias = [
  "Fantasia", 
  "Ficção Científica / Distopia", 
  "Romance", 
  "Drama / Realismo", 
  "Outros (Biografia / Histórico)", 
  "Outros (Clássico)", 
  "Outros (Fantasia / Épico)"
];

// Pontuações para cada categoria
const pontuacaoFantasiaTotal = [10, 14, 15, 19, 20, 24, 25, 29, 30, 34];
const pontuacaoFiccaoCientificaTotal = [10, 16, 17, 23, 24, 30];
const pontuacaoRomanceTotal = [10, 15, 16, 21, 22, 27, 28, 33];
const pontuacaoDramaTotal = [10, 15, 16, 21, 22, 27, 28, 33, 34, 39];
const pontuacaoOutrosBiografiaTotal = [10, 19];
const pontuacaoOutrosClassicoTotal = [20, 29];
const pontuacaoOutrosFantasiaEpicoTotal = [30, 39];

// Livros recomendados por categoria
const livrosFantasia = ["Harry Potter e a Pedra Filosofal", "Percy Jackson e o Ladrão de Raios", "O Senhor dos Anéis: A Sociedade do Anel", "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", "O Hobbit"];
const livrosFiccaoCientifica = ["Jogos Vorazes", "Divergente", "Maze Runner: Correr ou Morrer"];
const livrosRomance = ["A Culpa é das Estrelas", "Eleanor & Park", "A Seleção", "Cidades de Papel"];
const livrosDrama = ["Extraordinário", "O Sol é Para Todos", "Eu, Você e a Garota Que Vai Morrer", "Os 13 Porquês", "A Menina que Roubava Livros"];
const livrosOutrosBiografia = ["O Diário de Anne Frank"];
const livrosOutrosClassico = ["O Pequeno Príncipe"];
const livrosOutrosFantasiaEpico = ["A Guerra dos Tronos"];

// URLs para livros recomendados por categoria
const urlsFantasia = ["../html/livros/harry-potter.html", "../html/livros/percy-jackson.html", "../html/livros/senhor-dos-aneis.html", "../html/livros/cronicas-de-narnia.html", "../html/livros/o-hobbit.html"];
const urlsFiccaoCientifica = ["../html/livros/jogos-vorazes.html", "../html/livros/divergente.html", "../html/livros/maze-runner.html"];
const urlsRomance = ["../html/livros/a-culpa-e-das-estrelas.html", "../html/livros/eleanor-e-park.html", "../html/livros/a-selecao.html", "../html/livros/cidades-de-papel.html"];
const urlsDrama = ["../html/livros/extraordinario.html", "../html/livros/o-sol-e-para-todos.html", "../html/livros/eu-voce-e-a-garota.html", "../html/livros/os-treze-porques.html", "../html/livros/a-menina-que-roubava-livros.html"];
const urlsOutrosBiografia = ["../html/livros/o-diario-de-anne-frank.html"];
const urlsOutrosClassico = ["../html/livros/o-pequeno-principe.html"];
const urlsOutrosFantasiaEpico = ["../html/livros/a-guerra-dos-tronos.html"];

// Função para recomendar um livro com base na pontuação calculada
function recomendarLivro(pontuacao) {
  // Variáveis para determinar a categoria com a maior pontuação
  let categoriaFavorita = "";
  let maiorPontuacao = 0;

  // Itera sobre cada categoria para encontrar a que tem a maior pontuação
  for (let i = 0; i < categorias.length; i++) {
    const categoria = categorias[i];

    // Acessa a pontuação da categoria correspondente a partir do objeto 'pontuacao'
    const categoriaPontuacao = pontuacao[categoria];

    // Se a pontuação dessa categoria for maior que a maiorPontuacao, atualize
    if (categoriaPontuacao > maiorPontuacao) {
      maiorPontuacao = categoriaPontuacao;
      categoriaFavorita = categoria;
    }
  }

  // Inicializa a variável para armazenar a URL da recomendação de livro
  let urlLivroRecomendado = "../html/livros/nao-encontrado.html"; // Página genérica

  // Identifica o índice da categoria favorita
  const categoriaIndex = categorias.indexOf(categoriaFavorita);

  if (categoriaIndex !== -1) {
    // Seleciona os vetores de livros e URLs correspondentes à categoria favorita
    let urlsCategoria = [];  // Declare URLs de forma local
    let livrosCategoria = [];  // Declare livros de forma local

    switch (categoriaFavorita) {
      case "Fantasia":
        livrosCategoria = livrosFantasia;
        urlsCategoria = urlsFantasia;
        break;
      case "Ficção Científica / Distopia":
        livrosCategoria = livrosFiccaoCientifica;
        urlsCategoria = urlsFiccaoCientifica;
        break;
      case "Romance":
        livrosCategoria = livrosRomance;
        urlsCategoria = urlsRomance;
        break;
      case "Drama / Realismo":
        livrosCategoria = livrosDrama;
        urlsCategoria = urlsDrama;
        break;
      case "Outros (Biografia / Histórico)":
        livrosCategoria = livrosOutrosBiografia;
        urlsCategoria = urlsOutrosBiografia;
        break;
      case "Outros (Clássico)":
        livrosCategoria = livrosOutrosClassico;
        urlsCategoria = urlsOutrosClassico;
        break;
      case "Outros (Fantasia / Épico)":
        livrosCategoria = livrosOutrosFantasiaEpico;
        urlsCategoria = urlsOutrosFantasiaEpico;
        break;
      default:
        livrosCategoria = [];
        urlsCategoria = [];
    }

    // Agora buscamos a recomendação com base na maior pontuação
    let pontuacaoCategoria = [];

    // Determina a pontuação correta para a categoria favorita (você pode usar arrays diferentes para cada categoria)
    switch (categoriaFavorita) {
      case "Fantasia":
        pontuacaoCategoria = pontuacaoFantasiaTotal;
        break;
      case "Ficção Científica / Distopia":
        pontuacaoCategoria = pontuacaoFiccaoCientificaTotal;
        break;
      case "Romance":
        pontuacaoCategoria = pontuacaoRomanceTotal;
        break;
      case "Drama / Realismo":
        pontuacaoCategoria = pontuacaoDramaTotal;
        break;
      case "Outros (Biografia / Histórico)":
        pontuacaoCategoria = pontuacaoOutrosBiografiaTotal;
        break;
      case "Outros (Clássico)":
        pontuacaoCategoria = pontuacaoOutrosClassicoTotal;
        break;
      case "Outros (Fantasia / Épico)":
        pontuacaoCategoria = pontuacaoOutrosFantasiaEpicoTotal;
        break;
      default:
        pontuacaoCategoria = [];
    }

    // Itera sobre as pontuações para determinar a URL do livro recomendado
    for (let i = 0; i < pontuacaoCategoria.length; i++) {
      const intervalo = pontuacaoCategoria[i];

      // Se a maior pontuação corresponde à pontuação da categoria, seleciona o livro
      if (maiorPontuacao >= intervalo) {
        urlLivroRecomendado = urlsCategoria[i];
        break; // Sai do loop após encontrar a recomendação
      }
    }
  }

  // Redireciona para a página específica do livro recomendado
  window.location.href = urlLivroRecomendado;
}

// Função que processa o questionário e recomenda o livro
function processarQuestionario() {
  // Calcula a pontuação com base nas respostas
  const pontuacao = calcularPontuacao(); // Implementação dessa função deve estar em algum lugar

  // Recomenda um livro com base na pontuação
  recomendarLivro(pontuacao);
}

// Função que processa o questionário e recomenda o livro
function processarQuestionario() {
  // Calcula a pontuação com base nas respostas
  const pontuacao = calcularPontuacao(); // Implementação dessa função deve estar em algum lugar

  // Recomenda um livro com base na pontuação
  recomendarLivro(pontuacao);
}
