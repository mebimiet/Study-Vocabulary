const flashcard = document.getElementById("flashcard");
const wordEl = document.getElementById("word");
const pronunciationEl = document.getElementById("pronunciation");
const definitionEl = document.getElementById("definition");
const sentenceEl = document.getElementById("sentence");

const leftZone = document.querySelector(".left-zone");
const rightZone = document.querySelector(".right-zone");

let index = 0;

const vocab = [
  {
    word: "Austere",
    pronunciation: "/ɔːˈstɪr/",
    definition: "Severe or strict in manner or appearance.",
    sentence: "The room had an austere atmosphere."
  },
  {
    word: "Pragmatic",
    pronunciation: "/præɡˈmætɪk/",
    definition: "Practical and realistic.",
    sentence: "She took a pragmatic approach."
  },
  {
    word: "Ambiguous",
    pronunciation: "/æmˈbɪɡjuəs/",
    definition: "Open to more than one meaning.",
    sentence: "His reply was ambiguous."
  }
];

function loadCard() {
  const v = vocab[index];
  wordEl.textContent = v.word;
  pronunciationEl.textContent = v.pronunciation;
  definitionEl.textContent = v.definition;
  sentenceEl.textContent = v.sentence;

  // ALWAYS reset to front
  flashcard.classList.remove("flipped");
}

// flip ONLY when clicking the card
flashcard.addEventListener("click", (e) => {
  e.stopPropagation();
  flashcard.classList.toggle("flipped");
});

// previous
leftZone.addEventListener("click", () => {
  if (index > 0) {
    index--;
    loadCard();
  }
});

// next
rightZone.addEventListener("click", () => {
  if (index < vocab.length - 1) {
    index++;
    loadCard();
  }
});

// init
loadCard();
