const quizData = [
  {
    question: "How old is the Admin?",
    a: "30",
    b: "27",
    c: "29",
    d: "32",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2019?",
    a: "C",
    b: "Java",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of US",
    a: "J. Biden",
    b: "D.Trump",
    c: "J. Trudeau",
    d: "V.Putin",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "2001",
    c: "1999",
    d: "1995",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.querySelector("button");
const quiz = document.querySelector(".quiz-container");
const answers = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  questionEl.innerHTML = quizData[currentQuestion].question;
  a_text.innerHTML = quizData[currentQuestion].a;
  b_text.innerHTML = quizData[currentQuestion].b;
  c_text.innerHTML = quizData[currentQuestion].c;
  d_text.innerHTML = quizData[currentQuestion].d;
}

function getSelected() {
  let answer = undefined;

  answers.forEach((x) => {
    if (x.checked) {
      answer = x.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answers.forEach((x) => {
    x.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    // console.log(answer);
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length} </h2>
    <button onclick="location.reload()"}>Reload</button>`;
      // alert("You are finished!");
    }
  }
});
