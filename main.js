var time = 60;
var cleanset;
var hitrandom;
var score = 0;
const game = document.querySelector(".game");
const timelbl = document.querySelector(".time");
const scorelbl = document.querySelector(".score");
const hitlbl = document.querySelector(".hit");
const finalbtn = document.querySelector(".final-btn");
const finalscore = document.querySelector("#scoree");
const overlap = document.querySelector(".overlap");
const shufflebtn = document.querySelector(".shuffle");

let user = prompt("Best Mobile Experience Enter 40 And For Desktop 135 Or Any Number As Per Your Window\nDont Cancel Or Press Ok Without Value\nItna Code Nhi Aata Mujhe")
let valuepromt = Number(user);


function multicircle() {
  var orgcircle = "";
  for (var i = 0; i < valuepromt; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    orgcircle+=`<div class="circle">${randomNum}</div>`;
  }
  game.innerHTML = orgcircle;
}

function sumscore() {
  score += 10;
  scorelbl.textContent = score;
}

function reset() {
  game.innerHTML = overlap.style.display = `block`;
  finalscore.textContent =  score;
  shufflebtn.style.display = "none"
}

function timer() {
  cleanset = setInterval(() => {
    if (time > 0) {
      time--;
      timelbl.textContent = time;
    } else {
      clearInterval(cleanset);
      reset()
    }
  }, 1000);
}

function hitchange() {
  hitrandom = Math.floor(Math.random() * 10);
  hitlbl.textContent = hitrandom;
}


game.addEventListener("click", function(dets) {
  if (time > 0 && dets.target.classList.contains("circle")) {
    var numclick = Number(dets.target.textContent);
    if (numclick === hitrandom) {
      sumscore();
      hitchange();
      multicircle();
    } else {
      clearInterval(cleanset)
      reset()
    }
  }
});


finalbtn.addEventListener("click", () => {
  multicircle()
  hitchange()
  time = 60;
  timer()
  score = 0;
  sumscore()
  overlap.style.display = "none"
  shufflebtn.style.display = "block"
})

shufflebtn.addEventListener("click", multicircle)

multicircle()
hitchange();
timer();