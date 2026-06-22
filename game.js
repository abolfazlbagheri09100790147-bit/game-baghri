let currentLevel = 0;
let stars = 0;

// صداها
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");
const victorySound = new Audio("sounds/victory.mp3");

// عناصر صفحه
const questionEl = document.getElementById("question");
const imageEl = document.getElementById("levelImage");
const optionsEl = document.getElementById("options");
const starsEl = document.getElementById("starsCount");
const levelEl = document.getElementById("levelNumber");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");

function loadLevel() {


if (typeof levels === "undefined") {
    alert("خطا: فایل levels.js بارگذاری نشده است");
    return;
}

const level = levels[currentLevel];

questionEl.textContent = level.question;
imageEl.src = level.image;

optionsEl.innerHTML = "";

level.options.forEach(option => {

    const btn = document.createElement("button");

    btn.className = "answer-btn";
    btn.textContent = option;

    btn.onclick = () => checkAnswer(option);

    optionsEl.appendChild(btn);

});

levelEl.textContent =
    (currentLevel + 1) + " / " + levels.length;

resultBox.style.display = "none";
nextBtn.style.display = "none";
retryBtn.style.display = "none";


}

function checkAnswer(answer) {


const level = levels[currentLevel];

resultBox.style.display = "block";

if (answer.trim() === level.answer.trim()) {

    correctSound.currentTime = 0;
    correctSound.play();

    stars++;

    starsEl.textContent = stars;

    resultText.innerHTML =
        "✅ آفرین! پاسخ درست است.";

    nextBtn.style.display = "inline-block";
const wrongSound = new Audio("sounds/wrong.mp3");
} else {

    wrongSound.currentTime = 0;
    wrongSound.play();

    resultText.innerHTML =
        "❌ دوباره تلاش کن.";

    retryBtn.style.display = "inline-block";
}


}

function retryLevel() {
loadLevel();
}

function nextLevel() {

currentLevel++;
const victorySound = new Audio("sounds/victory.mp3");
if (currentLevel >= levels.length) {

    victorySound.currentTime = 0;
    victorySound.play();

    document.querySelector(".game-panel").innerHTML = `

    <h1 style="color:#2ecc71">
    🏆 تبریک
    </h1>

    <h2>
    شما همه مراحل را تمام کردید
    </h2>

    <h2>
    ⭐ ${stars} ستاره
    </h2>

    `;

    return;
}

loadLevel();


}

function toggleMusic() {


const music =
    document.getElementById("bgMusic");

if (!music) return;

if (music.paused) {

    music.play();

} else {

    music.pause();
}


}

window.onload = function () {


loadLevel();


};
