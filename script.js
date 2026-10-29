const celebrateButton = document.querySelector("#celebrate-button");
const candles = [...document.querySelectorAll(".candle")];
const confettiLayer = document.querySelector("#confetti-layer");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function celebrate() {
  const colors = ["#e98c91", "#f3bd77", "#9bb9a0", "#b8a3cf", "#f1a779"];
  for (let i = 0; i < 90; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.5}s`;
    if (Math.random() > 0.5) piece.style.borderRadius = "50%";
    confettiLayer.append(piece);
    window.setTimeout(() => piece.remove(), 4300);
  }
  showToast("Make a wish! ✨");
}

celebrateButton.addEventListener("click", celebrate);

candles.forEach((candle) => {
  candle.addEventListener("click", () => {
    candle.classList.add("is-out");
    candle.setAttribute("aria-pressed", "true");
    if (candles.every((item) => item.classList.contains("is-out"))) {
      showToast("Wish made! Have the happiest birthday 🎂");
      celebrate();
    }
  });
});