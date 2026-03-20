const message = document.getElementById("message");
const button = document.getElementById("nextBtn");
const game = document.getElementById("game");
const photo = document.getElementById("photo");
const counterText = document.getElementById("counter");
const gameText = document.getElementById("gameText");
const mainTitle = document.getElementById("mainTitle");

const messages = [
  "about today.",
  "I’ve been thinking about it properly.",
  "I know I hurt you.",
  "You didn’t deserve that from me.",
  "I’m not going to make excuses.",
  "I was wrong.",
  "And I understand why you felt the way you did.",
  "I really am sorry.",
  "If you’re still upset… I get it.",
];

let index = 0;
let taps = 0;

button.addEventListener("click", () => {
  index++;

  if (index < messages.length) {
    message.innerText = messages[index];
  } else {
    message.innerText = "I’m really sorry.";
    button.style.display = "none";
    mainTitle.style.display = "none";
    game.classList.remove("hidden");
  }
});

photo.addEventListener("click", () => {
  taps++;
  counterText.innerText = taps + " taps";

  photo.classList.add("punch");
  setTimeout(() => photo.classList.remove("punch"), 300);

  if (taps === 10) gameText.innerText = "okay… that’s fair";
  if (taps === 20) gameText.innerText = "I probably deserve that";
  if (taps === 30) gameText.innerText = "alright… maybe I really messed up";
  if (taps === 40) gameText.innerText = "you can stop anytime… but I get it";
  if (taps === 50) gameText.innerText = "…I’ll still be here when you’re done";
});
