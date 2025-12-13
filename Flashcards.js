const cards = [
  {
    word: "Eloquent",
    pronunciation: "/ˈeləkwənt/",
    meaning: "Fluent and persuasive in speaking.",
    sentence: "He delivered an eloquent argument."
  },
  {
    word: "Astute",
    pronunciation: "/əˈstjuːt/",
    meaning: "Having sharp judgment.",
    sentence: "She made an astute observation."
  }
];

let index = 0;
const flashcard = document.getElementById("flashcard");
const word = document.getElementById("word");
const definition = document.getElementById("definition");

function render() {
  word.textContent = cards[index].word;
  definition.innerHTML = `<strong>${cards[index].pronunciation}</strong><br><br>
    ${cards[index].meaning}<br><br>
    <em>${cards[index].sentence}</em>`;
}

render();

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index = (index + 1) % cards.length;
    flashcard.classList.remove("flipped");
    render();
  }
  if (e.key === "ArrowLeft") {
    index = (index - 1 + cards.length) % cards.length;
    flashcard.classList.remove("flipped");
    render();
  }
});
