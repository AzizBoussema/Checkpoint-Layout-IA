/* =====================
   TOGGLE THEME
===================== */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode clair"
    : "🌙 Mode sombre";
});

/* =====================
   ANIMATION FADE-IN
===================== */
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 200);
  });
});
