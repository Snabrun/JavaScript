const get_cookie = document.cookie.split('=')[1];

window.addEventListener('load', () => {
    if (!get_cookie) {
        return window.location='paasivu.html';
    }
    else {
        document.getElementsByClassName("cardsContainer")[0].setAttribute("data-game_size",  get_cookie);
    }
});

// main container
const container = document.getElementsByClassName("memory-game")[0];
// card div attributes
// const attributes = ["q", "q", "w", "w", "e", "e", "r", "r", "t", "t"];
/**
 * game types
 * @type {number[]} actually is 4x4, 4x6, 6x6
 */
const game_types = [8, 12, 18];
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
  let type = number

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
InitializeCards(get_cookie);

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



//TIMER

var timer = 0;
var timerInterval;
var second = document.getElementById('second');
var minute = document.getElementById('minute');

function vpered() {
  sanovka();
  timerInterval = setInterval(function() {
  timer += 1/60;
  msVal = Math.floor((timer - Math.floor(timer))*100);
  secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  minuteVal = Math.floor(timer/60);
  //ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
}

function sanovka() {
  clearInterval(timerInterval);
}

function resetTimer() {
  timer = 0;
  second.innerHTML = "00";
  minute.innerHTML = "00";

}








let hasFlippedCard = false;
let firstCard, secondCard;
let boardLocked = false;
let clicker = 0

 cards.forEach((card) => {
   // Adding listener to all card classes
   card.addEventListener('click', () => {
     // If true, then we remove the class, either we add class
   //  card.classList[1] === 'flip' ? card.classList.remove('flip') : card.classList.add('flip');
   if (!gameStarted) return;
   if (boardLocked) return;
   if (card === firstCard) return;
   clicker += 1;
   console.log(clicker);
   document.getElementById('howMuchClick').innerHTML = clicker;

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

var wins = 0;
const checkForMatch = () => {
  if (firstCard.getAttribute("data-name") === secondCard.getAttribute("data-name")) {
    console.log("gg same cards");
    firstCard.removeEventListener('click', cards);
    secondCard.removeEventListener('click', cards);
    wins += 1
    console.log(wins);
    document.getElementById('howMuchTrue').innerHTML = wins;
    if (wins == 8) theEnd(clicker);

  }

  else {
    boardLocked = true;
    console.log("you are loh");
    setTimeout (() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    boardLocked = false;
  }, 800);
  }
};


//START GAME
var gameStarted
var timerStarted
let switchStart = false

function start() {
  if (switchStart === false) {
    gameStarted = true;
    timerStarted = true;
    console.log("gameStarted");
    document.getElementById('startID').innerHTML = "RESET";
    switchStart = true;
  }
  //RESET GAME
  else {
    sanovka();
    resetTimer();
    document.getElementById('startID').innerHTML = "START";
    switchStart = false;
    gameStarted = false;
    wins = 0;
    clicker = 0;
    document.getElementById('howMuchTrue').innerHTML = "0";
    document.getElementById('howMuchClick').innerHTML = "0";
    console.log(wins);


    // FLIP REMOVE AFTER 0,5s AND shuffle after 1s
    setTimeout (() => {
      cards.forEach((card) => {
        card.classList.remove('flip');
      });
    }, 500);

    setTimeout (() => {

      shuffle();
    }, 1000);

  }
}


function theEnd() {
  var newClass = document.getElementById('me');
  document.querySelector('.memory-game').style.filter = 'blur(2px)';
  document.getElementById('GG').innerHTML ="<b>" + "Käytit " + clicker + " napsautusta voittaaksesi!" + "</b>";
  console.log(clicker);
  var newClass = document.getElementById('me');
  newClass.classList.remove("wtf");
  newClass.classList.add("NotHidden");
  console.log('you won!');
  sanovka();
  console.log(secondVal);
  document.getElementById('muchTimeM').innerHTML = minuteVal;
  document.getElementById('muchTimeS').innerHTML = secondVal;

    //hujnya.getElementsByClassName('wtf');



};
//play again button
var oldClass = document.getElementById('me');
function hiddenButton(newClass) {
  oldClass.classList.remove("NotHidden");
  oldClass.classList.add("wtf");
  document.querySelector('.memory-game').style.filter = 'blur(0px)';
console.log(oldClass);
minuteVal = 0;
secondVal = 0;
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
