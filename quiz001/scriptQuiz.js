const quizData = [
  {
    question:
      'O termo supressão de vegetação natural pode ser definido como a recuperação de uma área composta por vegetação degradada, por meio de espécies nativas da região. A afirmativa é verdadeira ou falsa?',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'b',
  },
  {
    question:
      'O sistema PRODES, desenvolvido pelo do Instituto Nacional de Pesquisas Espaciais (INPE), monitora o desmatamento nas florestas primárias localizadas nos nove estados da Amazônia Legal. A afirmativa é verdadeira ou falsa?',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'a',
  },
  {
    question:
      'Devido ao alto custo de imagens de satélite, o PRODES realiza o monitoramento do desmatamento na floresta Amazônica a cada cinco anos. A afirmativa é verdadeira ou falsa?',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'b',
  },
  {
    question:
      'O sistema PRODES realiza o inventário de perda de vegetação natural através do uso de imagens de satélite de observação da terra para todos os biomas brasileiros (ALMEIDA et al., 2022). Identifique a alternativa correspondente ao estado da Amazônia que teve as maiores perdas de floresta nos últimos cinco anos:',
    a: 'Amapá',
    b: 'Tocantins',
    c: 'Acre',
    d: 'Pará',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
