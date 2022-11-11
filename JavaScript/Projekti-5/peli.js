// main container
const container = document.getElementsByClassName("memory-game")[0];
// card div attributes
// const attributes = ["q", "q", "w", "w", "e", "e", "r", "r", "t", "t"];
/**
 * game types
 * @type {number[]} actually is 4x4, 4x6, 6x6
 */
const game_types = [8, 12, 32];
/**
 * Shuffling cards
 */
function shuffle() {
  let elementsArray = Array.prototype.slice.call(container.getElementsByClassName('memory-card'));
  elementsArray.forEach((element) => {
    container.removeChild(element);
  })

  for (let i = elementsArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = elementsArray[i];

    elementsArray[i] = elementsArray[j];
    elementsArray[j] = temp;
  }

  elementsArray.forEach((element) => {
    container.appendChild(element);
  })
}
/**
 * Adding cards to html and shuffling them
 * @param number is the array index
 */
function InitializeCards(number) {
  let type = game_types[number];

  for (let card = 0; card < type; card++) {
    // shuffle cards before the loop is going to end

    for (let i = 0; i < 2; i++) {
        const element = container.appendChild(document.createElement('div'));

        const imageFront = element.appendChild(document.createElement('img'));
        const imageBack = element.appendChild(document.createElement('img'));


        element.className = 'memory-card';
        element.setAttribute('data-name', card);
       // element.setAttribute('data-framework', attributes[card]);
        //TODO: ADD MORE CARDS
        imageFront.src = `./kuvat/${card}.jpg`;
        imageFront.className = 'front-face';

        imageBack.src = "./kuvat/question.png";
        imageBack.className = 'back-face';
      }
  }

  shuffle();
}




/*
 * Initializing cards and then we wait the click.
 */
InitializeCards(0);

// All div cards
const cards = document.querySelectorAll(".memory-card");
/**
 * This loop is responsible for appending new class and removing this new class
 */
 function Disable(first, second) {
   for (var i = 0; i < cards.length; i++) {
     document.getElementsByClassName("memory-card")[i].setAttribute("disabled", true)
   }

 }





let hasFlippedCard = false;
let firstCard, secondCard;
let boardLocked = false;

 cards.forEach((card) => {
   // Adding listener to all card classes
   card.addEventListener('click', () => {
     // If true, then we remove the class, either we add class
   //  card.classList[1] === 'flip' ? card.classList.remove('flip') : card.classList.add('flip');
   if (boardLocked) return;
   if (card === firstCard) return;

   card.classList.add('flip');

   if (!hasFlippedCard) {
     //first click

     hasFlippedCard = true;
     firstCard = card;
     console.log(card, "firstCard");
   }
   else {
     //second card

     hasFlippedCard = false;
     secondCard = card;
     console.log(card, "secondCard");

     checkForMatch()
   }
 });
});

const checkForMatch = () => {
  if (firstCard.getAttribute("data-name") === secondCard.getAttribute("data-name")) {
    console.log("gg same cards");
    firstCard.removeEventListener('click', cards);
    secondCard.removeEventListener('click', cards);

  }
  else {
    boardLocked = true;
    console.log("you are loh");
    setTimeout (() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    boardLocked = false;
    }, 1000);
  }
}










/*
var firstCard
var click = 1
var voitto = 0
cards.forEach((card) => {
  // Adding listener to all card classes
  card.addEventListener('click', () => {
    // If true, then we remove the class, either we add class
  //  card.classList[1] === 'flip' ? card.classList.remove('flip') : card.classList.add('flip');
    if (!card.getAttribute("disabled")) {
      card.classList[1] === 'flip' ? card.classList.remove('flip') : card.classList.add('flip')
      if (click === 2) {


        if (secondCard.getAttribute("data-name") === card.getAttribute("data-name")) {
          console.log("same");
          voitto += 1;
          click = 1;

        }
        else if (secondCard.getAttribute("data-name") !== card.getAttribute("data-name")){
          //Disable(card, secondCard)
          card.classList.remove('flip')
          secondCard.classList.remove('flip')
          console.log(secondCard);
          click = 1;
        }

      }

      secondCard = card;
      click += 1;
      console.log(click);
    }
  })
});
*/


/*
var firstClick
var secondClick
var muchClick = 0

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (!card.getAttribute("disabled")) {
      card.classList[1] === 'flip' ? card.classList.remove('flip') : card.classList.add('flip')
      muchClick += 1;
      firstClick = firstClick.getAttribute("data-name");
      console.log(firstClick);

      if (firstClick.getAttribute("data-name") === secondCard.getAttribute("data-name")) {
        console.log("same");
        voitto += 1;
        click = 0;

      }
      else if (firstClick.getAttribute("data-name") !== secondClick.getAttribute("data-name") {

      }

    }









  })

});

*/
