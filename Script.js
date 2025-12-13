const flashcard = document.getElementById('flashcard');

let currentIndex = 0;
const cards = [
  {word: 'Parcel', pron: 'per-sell', def: 'a package', example: 'I received a parcel today.'},
  {word: 'Ample', pron: 'am-puhl', def: 'more than enough', example: 'There was ample food.'},
  {word: 'Benevolent', pron: 'bə-nev-uh-luhnt', def: 'kind, generous', example: 'She was benevolent to the poor.'}
];

// Update flashcard content
function updateCard(index) {
  const front = flashcard.querySelector('.flashcard-front h3');
  const back = flashcard.querySelector('.flashcard-back');
  front.textContent = cards[index].word;
  back.innerHTML = `
    <p><strong>Pronunciation:</strong> ${cards[index].pron}</p>
    <p><strong>Definition:</strong> ${cards[index].def}</p>
    <p><strong>Example:</strong> ${cards[index].example}</p>
  `;
  flashcard.classList.remove('flipped');
}

updateCard(currentIndex);

// Click flashcard for next/prev based on click side
flashcard.addEventListener('click', (e) => {
  const rect = flashcard.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  if (clickX > rect.width / 2) {
    // Right side → next
    currentIndex = (currentIndex + 1) % cards.length;
  } else {
    // Left side → previous
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }
  updateCard(currentIndex);
  flashcard.classList.toggle('flipped');
});
