const ROUND_SIZE = 10;
const TIME_PER_QUESTION = 20;
const STORAGE_KEY = "quizMahalLeaderboard";

const categoryNames = {
  art: "Art Styles",
  actors: "Actors",
  movies: "Guess the Movie",
  festivals: "Festivals",
  language: "Guess the Language",
  random: "Random Masala"
};

const praise = ["Shabaash!", "Bahut Badhiya!", "Ekdum Jhakaas!", "Wah Wah!", "Kya Baat Hai!"];
const oops = ["Arre Yaar!", "Oh Ho!", "Galat Jawab!", "Aiyo!"];

let questions = [];
let current = 0;
let score = 0;
let correctCount = 0;
let timeLeft = 0;
let timer = null;
let currentCat = "";

// ---------- helpers ----------

function shuffle(list) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

// ---------- quiz ----------

function startQuiz(cat) {
  currentCat = cat;
  let pool = [];

  if (cat === "random") {
    for (const key in quizData) {
      quizData[key].forEach(q => pool.push({ ...q, cat: key }));
    }
  } else {
    pool = quizData[cat].map(q => ({ ...q, cat: cat }));
  }

  questions = shuffle(pool).slice(0, ROUND_SIZE);
  current = 0;
  score = 0;
  correctCount = 0;

  document.getElementById("quizTitle").textContent = categoryNames[cat];
  showScreen("quiz");
  showQuestion();
}

// 1 right answer + 3 wrong answers from the same category
function makeOptions(q) {
  const allAnswers = [...new Set(quizData[q.cat].map(x => x.answer))];
  const wrong = shuffle(allAnswers.filter(a => a !== q.answer)).slice(0, 3);
  return shuffle([q.answer, ...wrong]);
}

function showQuestion() {
  const q = questions[current];

  document.getElementById("qCount").textContent = "Q " + (current + 1) + " / " + questions.length;
  document.getElementById("scoreNow").textContent = "⭐ " + score;
  document.getElementById("qText").textContent = q.question;
  document.getElementById("qHint").textContent = q.hint || "";

  const big = document.getElementById("qBig");
  big.innerHTML = "";
  if (q.image) {
    const img = document.createElement("img");
    img.src = q.image;
    img.alt = "Mystery photo";
    img.className = q.cat === "art" ? "photo art" : "photo";
    big.appendChild(img);
    big.className = "big";
  } else {
    big.textContent = q.big;
    big.className = q.cat === "language" ? "big script" : "big";
  }

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";
  makeOptions(q).forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(btn, opt);
    optionsBox.appendChild(btn);
  });

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = TIME_PER_QUESTION;
  updateTimer();

  timer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      checkAnswer(null, null);
    }
  }, 1000);
}

function updateTimer() {
  document.getElementById("timerBar").style.width = (timeLeft / TIME_PER_QUESTION * 100) + "%";
  document.getElementById("timerText").textContent = "⏳ " + timeLeft + "s";
}

function checkAnswer(clickedBtn, choice) {
  clearInterval(timer);
  const q = questions[current];

  document.querySelectorAll(".option").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add("correct");
  });

  const feedback = document.getElementById("feedback");
  let title;

  if (choice === q.answer) {
    score += 10 + timeLeft; // speed bonus
    correctCount++;
    title = randomItem(praise) + " +" + (10 + timeLeft);
    feedback.className = "feedback good";
  } else {
    if (clickedBtn) clickedBtn.classList.add("wrong");
    title = choice === null ? "⏰ Time's Up!" : randomItem(oops);
    title += " It's " + q.answer + ".";
    feedback.className = "feedback bad";
  }

  feedback.innerHTML = "<strong>" + title + "</strong><span>" + q.fact + "</span>";
  document.getElementById("scoreNow").textContent = "⭐ " + score;

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.textContent = current === questions.length - 1 ? "See My Score ➜" : "Next ➜";
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("finalScore").textContent = score;
  document.getElementById("correctCount").textContent = correctCount + " out of " + questions.length + " correct";

  let msg;
  if (correctCount >= 9) msg = "Legendary! You're a true Desi Dil! 🏆";
  else if (correctCount >= 6) msg = "Superb! Almost a Bollywood hero! 🌟";
  else if (correctCount >= 3) msg = "Not bad! Keep exploring India! 🪔";
  else msg = "Picture abhi baaki hai, mere dost! Try again 😄";
  document.getElementById("resultMsg").textContent = msg;

  document.getElementById("playerName").value = "";
  document.getElementById("saveForm").classList.remove("hidden");
  showScreen("result");
}

// ---------- leaderboard ----------

function loadBoard() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveBoard(board) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
  } catch (e) {
    // storage blocked, leaderboard just won't be saved
  }
}

function addScore(name) {
  const board = loadBoard();
  board.push({ name: name, quiz: categoryNames[currentCat], score: score });
  board.sort((a, b) => b.score - a.score);
  saveBoard(board.slice(0, 20));
}

function showBoard() {
  const body = document.getElementById("boardBody");
  body.innerHTML = "";
  const board = loadBoard();

  if (board.length === 0) {
    body.innerHTML = '<tr><td colspan="4" class="empty">No scores yet. Be the first legend!</td></tr>';
  }

  const medals = ["🥇", "🥈", "🥉"];
  board.slice(0, 10).forEach((row, i) => {
    const tr = document.createElement("tr");
    [medals[i] || i + 1, row.name, row.quiz, row.score].forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  showScreen("board");
}

// ---------- decorations ----------

function makeToran() {
  const toran = document.getElementById("toran");
  for (let i = 0; i < 60; i++) {
    const flag = document.createElement("span");
    flag.className = "flag";
    toran.appendChild(flag);
  }
}

// ---------- events ----------

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => startQuiz(card.dataset.cat));
});

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

document.getElementById("exitBtn").addEventListener("click", () => {
  if (confirm("Exit this quiz? Your score will be lost.")) {
    clearInterval(timer);
    showScreen("home");
  }
});
document.getElementById("homeBoardBtn").addEventListener("click", showBoard);
document.getElementById("playAgainBtn").addEventListener("click", () => showScreen("home"));
document.getElementById("boardHomeBtn").addEventListener("click", () => showScreen("home"));

document.getElementById("saveForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("playerName").value.trim();
  if (name === "") return;
  addScore(name);
  showBoard();
});

document.getElementById("clearBtn").addEventListener("click", () => {
  if (confirm("Clear all leaderboard scores?")) {
    saveBoard([]);
    showBoard();
  }
});

makeToran();
