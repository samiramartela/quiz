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
