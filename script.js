let yesScale = 1;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const sadText = document.getElementById("sadText");
const area = document.querySelector(".button-area");

function moveNoButton() {
  const rect = area.getBoundingClientRect();

  const x = Math.random() * (rect.width - noBtn.offsetWidth);
  const y = Math.random() * (rect.height - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
  sadText.textContent = "do you not love me anymore 😢";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

function yes() {
  document.body.innerHTML = `
    <div class="container">
      <h1>
        the first to many valentines day baby! 💕<br><br>
        u and me forever hehe,<br>
        see u on vdays my love! 💘
      </h1>
    </div>
  `;

  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
