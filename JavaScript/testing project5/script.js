var secs, now, timer, mins = 0;

function time(){
  secs = Math.floor((Date.now() - now)/1000)
  if(secs == 60 ){
    now = Date.now();
    mins++;
  }
  if(secs < 10){
    secs = '0' + secs
  }
  timerid.innerHTML = mins + ':' + secs
};

function start() {
  now = Date.now();
  mins = 0;
  timer = setInterval(time);
}

const cards = document.querySelectorAll(".memory-card");
let hasDlippedCard = false;
let firsrCard, secondCard

const flipCard = e => {
  const target = e.target.parentElement;
  target.classList.add("flip");
}
