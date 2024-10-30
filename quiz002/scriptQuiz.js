const quizData = [
  {
    question: 'O que são queimadas?',
    a: 'Incêndios provocados acidentalmente',
    b: 'Incêndios intencionais ou acidentais em áreas de vegetação',
    c: 'Qualquer tipo de incêndio, seja em florestas ou cidades',
    d: 'Fumaça resultante de combustíveis fósseis',
    correct: 'b',
  },
  {
    question: 'As queimadas podem causar danos à saúde humana.',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'a',
  },
  {
    question: 'Qual é uma das principais causas de queimadas no Brasil?',
    a: 'Causas naturais, como raios.',
    b: 'Ação humana, por diversos motivos como limpeza de pastos e desmatamento.',
    c: 'Combustão espontânea em períodos de seca intensa.',
    d: 'Atividades vulcânicas.',
    correct: 'b',
  },
  {
    question:
      'As queimadas ocorrem são sempre prejudiciais e não fazem parte da dinâmica natural de nenhum bioma brasileiro?',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'b',
  },
  {
    question: 'As queimadas contribuem para o aumento do efeito estufa.',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'a',
  },
  {
    question:
      'Qual gás é liberado em grandes quantidades durante as queimadas e contribui diretamente para o aquecimento global?',
    a: 'Oxigênio',
    b: 'Dióxido de carbono (CO2)',
    c: 'Hidrogênio',
    d: 'Metano (CH4)',
    correct: 'b',
  },
  {
    question:
      'Além do desmatamento, qual é outra consequência ambiental significativa das queimadas?',
    a: 'Aumento da biodiversidade',
    b: 'Erosão do solo',
    c: 'Regeneração imediata da vegetação',
    d: 'Aumento das chuvas',
    correct: 'b',
  },
  {
    question: 'O que representa um "foco de queima" detectado por um satélite?',
    a: 'Uma área específica onde se pode identificar as causas da queimada.',
    b: 'Um ponto com coordenadas geográficas exatas, indicando o início do incêndio.',
    c: 'A localização precisa de uma frente de fogo, com informações sobre o tipo de vegetação afetada.',
    d: 'A detecção de fogo em um pixel da imagem do satélite, que é representado pelas coordenadas do centro do pixel.',
    correct: 'd',
  },
  {
    question:
      'Queimadas podem ser controladas e benéficas em algumas situações, como na manutenção de ecossistemas específicos',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'a',
  },
  {
    question:
      'O INPE disponibiliza dados de focos de queima em tempo real, permitindo o acompanhamento imediato de incêndios florestais.',
    a: 'Verdadeira',
    b: 'Falsa',
    correct: 'b',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2> Você respondeu ${score}/${quizData.length} perguntas corretamente</h2>
          <button onclick="location.reload()" id="submit">De novo</button>`;
    }
  }
});

function visitPage() {
  window.location = '../index.html';
}

// {
//   /* <button onclick="visitPage();">Visit Page Now</button>; */
// }
