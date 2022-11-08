const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

const flipCard = event => {
  const target = event.target.parentElement;

  taget.classList.add("flip");
/*
  if (!hasFlippedCard) {
    hasFlippedCard = false;
    secondCard = target;
  }
    else {
      hasFlippedCard = false;
      secondCard = target;
      checkForMatch();
    } */
};
/*
const checkForMatch = () => {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeElementListener("click", flipCard);
    secondCard.removeElementListener("click", flipCard);
  } else {
    firstCard.classList.remove('flip')
  }
};
*/


cards.forEach(card => {
  card.addEventListener("click", flipCard);
});
