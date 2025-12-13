const words = [
  { word: "Candid", pronunciation: "kan-did", definition: "Truthful and straightforward.", example: "He gave a candid answer to the question." },
  { word: "Elaborate", pronunciation: "ih-lab-uh-reyt", definition: "To explain in detail.", example: "Please elaborate on your plan." },
  { word: "Obfuscate", pronunciation: "ob-fuh-skeyt", definition: "To make something unclear or confusing.", example: "The speaker tried to obfuscate the main issue." },
  { word: "Pulchritude", pronunciation: "pul-kri-tood", definition: "Beauty; physical attractiveness.", example: "The pulchritude of the landscape amazed everyone." },
  { word: "Sycophant", pronunciation: "si-kuh-fuhnt", definition: "A person who flatters for personal gain.", example: "The manager surrounded himself with sycophants." }
];

let currentCardIndex = 0;
const cardContainer = document.querySelector('.card-container');
const nextCardBtn = document.getElementById('nextCard');

function showCard(index) {
  cardContainer.innerHTML = '';
  const cardData = words[index];

  const card = document.createElement('div');
  card.classList.add('card');

  const front = document.createElement('div');
  front.classList.add('front');
  front.innerHTML = `<h3>${cardData.word}</h3>`;

  const back = document.createElement('div');
  back.classList.add('back');
  back.innerHTML = `
    <p><strong>Pronunciation:</strong> ${cardData.pronunciation}</p>
    <p><strong>Definition:</strong> ${cardData.definition}</p>
    <p><strong>Example:</strong> ${cardData.example}</p>
  `;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', () => card.classList.toggle('flipped'));
  cardContainer.appendChild(card);
}

nextCardBtn.addEventListener('click', () => {
  currentCardIndex = (currentCardIndex + 1) % words.length;
  showCard(currentCardIndex);
});

showCard(currentCardIndex);

// -------------------
// Quiz
// -------------------
let currentQuizIndex = 0;
let quizCorrect = 0;
let quizWrong = 0;

const quizWordEl = document.getElementById('quizWord');
const options = Array.from(document.getElementsByClassName('optionBtn'));
const resultEl = document.getElementById('result');
const correctEl = document.getElementById('correct');
const wrongEl = document.getElementById('wrong');
const nextQuizBtn = document.getElementById('nextQuiz');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function showQuiz() {
  const wordData = words[currentQuizIndex];
  quizWordEl.textContent = wordData.word;

  let quizOptions = [wordData.definition];
  const otherDefs = words.filter((w, i) => i !== currentQuizIndex).map(w => w.definition);
  quizOptions.push(...shuffle(otherDefs).slice(0, 3));
  quizOptions = shuffle(quizOptions);

  options.forEach((btn, i) => {
    btn.textContent = quizOptions[i];
    btn.onclick = () => checkAnswer(btn.textContent, wordData.definition);
  });

  resultEl.textContent = '';
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    quizCorrect++;
    resultEl.textContent = '✅ Correct!';
  } else {
    quizWrong++;
    resultEl.textContent = `❌ Wrong! Correct: ${correct}`;
  }
  correctEl.textContent = quizCorrect;
  wrongEl.textContent = quizWrong;
}

nextQuizBtn.addEventListener('click', () => {
  currentQuizIndex = (currentQuizIndex + 1) % words.length;
  showQuiz();
});

showQuiz();
