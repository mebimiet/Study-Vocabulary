const questions = [
  { q: "Eloquent means:", options: ["Fluent and persuasive", "Careless", "Silent"], answer: 0 },
  { q: "Astute means:", options: ["Lazy", "Sharp and clever", "Confused"], answer: 1 },
  { q: "Benevolent means:", options: ["Kind and generous", "Rude", "Angry"], answer: 0 },
  { q: "Ample means:", options: ["Enough or more than enough", "Little", "Tiny"], answer: 0 }
];

let current = 0;
let score = 0;
let selectedQuestions = [...questions]; // for choosing subset if needed

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");

// Optional: prompt user for number of words
let numberOfWords = prompt("How many words do you want in the quiz? (max " + questions.length + ")");
if(numberOfWords && numberOfWords < questions.length) {
  selectedQuestions = questions.slice(0, numberOfWords);
}

function loadQuestion() {
  const q = selectedQuestions[current];
  questionEl.textContent = q.q;
  choicesEl.innerHTML = "";

  q.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      Array.from(choicesEl.children).forEach(b=>b.disabled=true); // disable all buttons
      if(i===q.answer){
        score++;
        btn.style.border = "3px solid green";
      } else {
        btn.style.border = "3px solid red";
        choicesEl.children[q.answer].style.border = "3px solid green"; // correct answer highlighted
      }
      setTimeout(()=>{
        current++;
        current < selectedQuestions.length ? loadQuestion() : endQuiz();
      }, 1000);
    };
    choicesEl.appendChild(btn);
  });
}

function endQuiz(){
  questionEl.textContent = "Quiz complete!";
  choicesEl.innerHTML = `
    <button onclick="startQuiz()">Restart Quiz</button>
    <button onclick="goHome()">Go to Homepage</button>
  `;
  scoreEl.textContent = `Score: ${score}/${selectedQuestions.length}`;
}

function startQuiz(){
  current = 0; score = 0;
  loadQuestion();
}

function goHome(){
  window.location.href = "index.html";
}

// Quit button mid-quiz
const quitBtn = document.createElement("button");
quitBtn.textContent = "Quit Quiz";
quitBtn.onclick = goHome;
document.body.prepend(quitBtn);

loadQuestion();
