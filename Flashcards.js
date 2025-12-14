const flashcard = document.getElementById("flashcard");
const wordEl = document.getElementById("word");
const pronunciationEl = document.getElementById("pronunciation");
const definitionEl = document.getElementById("definition");
const sentenceEl = document.getElementById("sentence");

const leftZone = document.querySelector(".left-zone");
const rightZone = document.querySelector(".right-zone");

let currentIndex = 0;

const vocab = [
  {
    word: "Austere",
    pronunciation: "/ɔːˈstɪr/",
    definition: "Severe or strict in manner or appearance.",
    sentence: "The classroom had an austere atmosphere during the exam."
  },
  {
    word: "Pragmatic",
    pronunciation: "/præɡˈmætɪk/",
    definition: "Dealing with things sensibly and realistically.",
    sentence: "She took a pragmatic approach to solving the issue."
  },
  {
    word: "Ambiguous",
    pronunciation: "/æmˈbɪɡjuəs/",
    definition: "Open to more than one interpretation.",
    sentence: "His answer was intentionally ambiguous."
  }
];

function renderCard() {
  const item = vocab[currentIndex];

  wordEl.textContent = item.word;
  pronunciationEl.textContent = item.pronunciation;
  definitionEl.textContent = item.definition;
  sentenceEl.textContent = item.sentence;

  // reset flip when switching cards
  flashcard.classList.remove("flipped");
}

/* CARD CLICK → FLIP ONLY */
flashcard.addEventListener("click", (e) => {
  e.stopPropagation(); // important: prevents side clicks from triggering
  flashcard.classList.toggle("flipped");
});

/* LEFT SIDE → PREVIOUS */
leftZone.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
});

/* RIGHT SIDE → NEXT */
rightZone.addEventListener("click", () => {
  if (currentIndex < vocab.length - 1) {
    currentIndex++;
    renderCard();
  }
});

/* INIT */
renderCard();
