const cards = document.querySelectorAll(".muistipeli-kortti");

const flipCard = e => {
  console.log("EVENT ON CARD", e.target.parentElement);
}

cards.forEach(card => {
  card.addEventListener("click", flipCard)
});
