const questions = [
  {
    q: "Eloquent means:",
    options: ["Fluent and persuasive", "Careless", "Silent"],
    answer: 0
  },
  {
    q: "Astute means:",
    options: ["Lazy", "Sharp and clever", "Confused"],
    answer: 1
  }
];

let score = 0;
let current = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  questionEl.textContent = questions[current].q;
  choicesEl.innerHTML = "";

  questions[current].options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === questions[current].answer) score++;
      current++;
      current < questions.length ? loadQuestion() : endQuiz();
    };
    choicesEl.appendChild(btn);
  });
}

function endQuiz() {
  questionEl.textContent = "Quiz complete!";
  choicesEl.innerHTML = "";
  scoreEl.textContent = `Score: ${score}/${questions.length}`;
}

loadQuestion();
