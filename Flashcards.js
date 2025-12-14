const flashcard = document.getElementById("flashcard");
const wordEl = document.getElementById("word");
const pronunciationEl = document.getElementById("pronunciation");
const definitionEl = document.getElementById("definition");
const sentenceEl = document.getElementById("sentence");

const leftZone = document.getElementById("leftZone");
const rightZone = document.getElementById("rightZone");

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

function renderCard() {
  const v = vocab[index];
  wordEl.textContent = v.word;
  pronunciationEl.textContent = v.pronunciation;
  definitionEl.textContent = v.definition;
  sentenceEl.textContent = v.sentence;

  flashcard.classList.remove("flipped");
}

/* flip ONLY when clicking the card */
flashcard.addEventListener("click", (e) => {
  e.stopPropagation();
  flashcard.classList.toggle("flipped");
});

/* invisible left/right click zones */
leftZone.addEventListener("click", () => {
  if (index > 0) {
    index--;
    renderCard();
  }
});

rightZone.addEventListener("click", () => {
  if (index < vocab.length - 1) {
    index++;
    renderCard();
  }
});

/* define click zones without touching CSS */
leftZone.style.position = "fixed";
leftZone.style.left = "0";
leftZone.style.top = "0";
leftZone.style.width = "25vw";
leftZone.style.height = "100vh";
leftZone.style.zIndex = "0";

rightZone.style.position = "fixed";
rightZone.style.right = "0";
rightZone.style.top = "0";
rightZone.style.width = "25vw";
rightZone.style.height = "100vh";
rightZone.style.zIndex = "0";

renderCard();
