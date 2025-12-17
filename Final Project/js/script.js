const tipBox = document.getElementById("tip-message");
const toggleBtn = document.getElementById("lighting-toggle");
const pickBtn = document.getElementById("pick-technique");

if (tipBox) updateTipOfDay();

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleLightingMode);
}

if (pickBtn) {
  pickBtn.addEventListener("click", pickRandomTechnique);
}

function updateTipOfDay() {
  const tips = [
    "Focus on consistent tone: bass notes should be steady and supportive.",
    "Use relaxed fretting-hand fingers for cleaner hammer-ons and pull-offs.",
    "For harmonics, aim for precision on the node point and quick release."
  ];
  const day = new Date().getDay();
  tipBox.textContent = tips[day % tips.length];
}

function toggleLightingMode() {
  document.body.classList.toggle("dramatic");
  toggleBtn.textContent = document.body.classList.contains("dramatic")
    ? "Revert to normal lighting"
    : "Try dramatic lighting →";
}

function pickRandomTechnique() {
  const items = [
    "Hammer-on (击弦): strike the string onto the fret to sound a new note.",
    "Pull-off (勾弦): release the finger with a slight pluck to sound the next note.",
    "Harmonics (泛音): lightly touch a node point for bell-like tones."
  ];
  const r = Math.floor(Math.random() * items.length);
  const out = document.getElementById("technique-pick");
  if (out) out.textContent = items[r];
}
