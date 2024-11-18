const quizData = [
  {
    question:
      'Onde estão localizados os biomas brasileiros? Assinale a alternativa FALSA.',
    a: 'Amazônia: Norte do Brasil, abrangendo nove estados.',
    b: 'Cerrado: Região central do Brasil, com grande biodiversidade',
    c: 'Caatinga: Nordeste do Brasil, caracterizada por clima semiárido.',
    d: 'Mata Atlântica: Apenas na região Sul do Brasil, em áreas de floresta densa',
    correct: 'd',
  },
  {
    question:
      'Você sabe qual a diferença entre tempo e clima? Indique a alternativa VERDADEIRA:',
    a: 'Tempo e Clima são a mesma coisa, e em geral se referem à temperatura, chuvas, características climáticas da região',
    b: 'Tempo se refere às condições atmosféricas em um curto período, enquanto clima é a média dessas condições ao longo de um longo período.',
    c: 'Tempo se refere às condições atmosféricas agradáveis, dias ensolarados, enquanto clima se refere às condições de dias frios ou chuvosos.',
    d: 'Tempo é a previsão do futuro, enquanto clima é a previsão do passado.',
    correct: 'b',
  },
  {
    question:
      'Qual destes fatores aumentam as emissões de carbono nos biomas brasileiros?',
    a: 'Desmatamento e queimadas',
    b: 'Uso de fertilizantes na agropecuária',
    c: 'Produção de energia em usinas termelétricas',
    d: 'Todos os anteriores',
    correct: 'd',
  },
  {
    question:
      'Qual bioma brasileiro possui a maior biodiversidade do planeta, abriga a maior floresta tropical úmida, e sofre ameaça de aumentos de temperatura e secas prolongadas no futuro, tornando-o mais vulnerável a degradação ?',
    a: 'Cerrado',
    b: 'Caatinga',
    c: 'Amazônia',
    d: 'Mata Atlântica',
    correct: 'c',
  },
  {
    question: 'Qual destas alternativas é VERDADEIRA?',
    a: 'A agricultura é um setor altamente sensível às mudanças climáticas. A irregularidade das chuvas pode afetar a produção agrícola, causando perdas de safras e aumento dos preços dos alimentos.',
    b: 'Amazonia não pega fogo, porque é uma floresta úmida.',
    c: 'Todas as emissões de gases que ocorrem nas queimadas no Cerrado e no Pantanal são reabsorvidas na Amazônia',
    d: 'As mudanças climáticas aumentarão as chuvas na maior parte do país.',
    correct: 'a',
  },
  {
    question:
      'Quais são os impactos das mudanças climáticas previstos no bioma Amazonia?',
    a: 'O aumento das temperaturas e redução das chuvas podem degradar a floresta Amazônica, e mudar a vegetação para uma característica de savanas',
    b: 'O aumento de extremos climáticos deve causar aumento da biodiversidade nas florestas tropicais.',
    c: 'Todas as áreas de savanas podem reduzir muito com o aumento das queimadas na Amazônia.',
    d: 'As queimadas aumentarão somente nas bordas da floresta, diminuindo da incidência de pragas em culturas agrícolas',
    correct: 'a',
  },
  {
    question:
      'O efeito estufa ocorre porque alguns gases na atmosfera aprisionam a radiação que vem ...',
    a: 'dos ventos solares, que atingem o topo da atmosfera',
    b: 'da radiação infravermelha emitida pela Terra',
    c: 'em grande parte, refletida pelas geleiras e nuvens',
    d: 'de erupções vulcânicas',
    correct: 'b',
  },
  {
    question:
      'A Caatinga, por ser um bioma adaptado a condições climáticas mais secas, é menos vulnerável aos impactos das mudanças climáticas, como a ocorrência de secas mais prolongadas.',
    a: 'Verdadeiro',
    b: 'Falso',
    c: 'Não sei',
    d: 'Fake News',
    correct: 'b',
  },
  {
    question:
      'O Cerrado desempenha um papel fundamental para a hidrografia brasileira, sendo conhecido como a "caixa d\'água" do país. Isso ocorre porque muitos dos principais rios brasileiros têm suas nascentes nesse bioma.',
    a: 'Verdadeira',
    b: 'Falsa',
    c: 'Não sei',
    d: 'Fake News',
    correct: 'a',
  },
  {
    question:
      'Qual a principal causa das queimadas nos ecossistemas brasileiros? Aponte a alternativa que melhor representa a realidade:',
    a: 'Fenômenos naturais como raios.',
    b: 'Atividades humanas, como a expansão da agricultura e a pecuária',
    c: 'Mudanças climáticas, principalmente o aumento da temperatura.',
    d: 'Combinação de fatores naturais e humanos, sendo impossível determinar uma causa principal.',
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
