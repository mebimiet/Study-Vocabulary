const flashcards = [
  {
    word: "Meticulous",
    pronunciation: "/məˈtɪkjʊləs/",
    meaning: "Showing great attention to detail; very careful and precise.",
    sentence: "She kept meticulous notes for every science experiment."
  },
  {
    word: "Ambiguous",
    pronunciation: "/æmˈbɪɡjuəs/",
    meaning: "Open to more than one interpretation; unclear.",
    sentence: "His answer was ambiguous and confused everyone."
  },
  {
    word: "Resilient",
    pronunciation: "/rɪˈzɪlɪənt/",
    meaning: "Able to recover quickly from difficulties.",
    sentence: "She remained resilient despite repeated setbacks."
  }
];

let currentIndex = 0;
let isFlipped = false;

const flashcard = document.getElementById("flashcard");
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");

/* ===== LOAD CARD ===== */
function loadCard(index) {
  const card = flashcards[index];

  front.textContent = card.word;

  back.innerHTML = `
    <div>
      <strong>Pronunciation</strong><br>
      ${card.pronunciation}
      <br><br>

      <strong>Meaning</strong><br>
      ${card.meaning}
      <br><br>

      <strong>Sentence</strong><br>
      ${card.sentence}
    </div>
  `;

  flashcard.classList.remove("flipped");
  isFlipped = false;
}

/* ===== FLIP CARD ===== */
flashcard.addEventListener("click", (e) => {
  const cardWidth = flashcard.offsetWidth;
  const clickX = e.offsetX;

  // LEFT SIDE → PREVIOUS
  if (clickX < cardWidth / 2) {
    currentIndex =
      (currentIndex - 1 + flashcards.length) % flashcards.length;
    loadCard(currentIndex);
    return;
  }

  // RIGHT SIDE → NEXT
  if (clickX >= cardWidth / 2) {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadCard(currentIndex);
    return;
  }
});

/* ===== DOUBLE CLICK TO FLIP ===== */
flashcard.addEventListener("dblclick", () => {
  flashcard.classList.toggle("flipped");
  isFlipped = !isFlipped;
});

/* INITIAL LOAD */
loadCard(currentIndex);
