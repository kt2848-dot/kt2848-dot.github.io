const dayMsg = document.getElementById("day-message");
const toggleBtn = document.getElementById("lighting-toggle");

if (dayMsg) {
  updateDayMessage();
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleLightingMode);
}

function updateDayMessage() {
  const now = new Date();
  const day = now.getDay();

  let message = "";

  switch (day) {
    case 0:
      message = "Sunday: A quiet day to reflect on the transformative power of Noh masks.";
      break;
    case 1:
      message = "Monday: Start the week with patience — even small gestures change a performance.";
      break;
    case 2:
      message = "Tuesday: Notice how light defines emotion in Noh theatre.";
      break;
    case 3:
      message = "Wednesday: Asymmetry invites interpretation, not perfection.";
      break;
    case 4:
      message = "Thursday: Tradition evolves with each new performance.";
      break;
    case 5:
      message = "Friday: Darkness and brightness coexist — just like the Hannya mask.";
      break;
    case 6:
      message = "Saturday: Theatre belongs to the present moment.";
      break;
    default:
      message = "Noh masks bridge past and present.";
  }

  dayMsg.textContent = message;
}

function toggleLightingMode() {
  document.body.classList.toggle("dramatic");
  if (document.body.classList.contains("dramatic")) {
    toggleBtn.textContent = "Revert to normal lighting";
  } else {
    toggleBtn.textContent = "Try dramatic lighting →";
  }
}
