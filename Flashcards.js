const cards = [
  { word: "Eloquent", pronunciation: "/ˈeləkwənt/", meaning: "Fluent and persuasive in speaking.", sentence: "He delivered an eloquent speech." },
  { word: "Astute", pronunciation: "/əˈstjuːt/", meaning: "Having sharp judgment.", sentence: "She made an astute observation." },
  { word: "Benevolent", pronunciation: "/bəˈnevələnt/", meaning: "Kind and generous.", sentence: "A benevolent donor gave money to the school." }
];

let index = 0;
const flashcard = document.getElementById("flashcard");
const wordEl = document.getElementById("word");
const definitionEl = document.getElementById("definition");

function renderCard() {
  const card = cards[index];
  wordEl.textContent = card.word;
  definitionEl.innerHTML = `<strong>${card.pronunciation}</strong><br><br>${card.meaning}<br><br><em>${card.sentence}</em>`;
}

renderCard();

// Flip card
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

// Navigate with left/right clicks
flashcard.addEventListener("click", (e) => {
  const rect = flashcard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if(x > rect.width/2) { // right side click → next
    index = (index + 1) % cards.length;
  } else { // left side click → previous
    index = (index - 1 + cards.length) % cards.length;
  }
  flashcard.classList.remove("flipped");
  renderCard();
});

