// Count down to the next New Year in the visitor's local timezone.
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const yearEl = document.querySelector(".year");
function updateCountdown() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const target = new Date(nextYear, 0, 1);
  const remaining = Math.max(0, target.getTime() - now.getTime());
  yearEl.textContent = String(nextYear);
  dayEl.textContent = String(Math.floor(remaining / 86400000));
  hourEl.textContent = String(Math.floor(remaining / 3600000) % 24).padStart(2, "0");
  minuteEl.textContent = String(Math.floor(remaining / 60000) % 60).padStart(2, "0");
  secondEl.textContent = String(Math.floor(remaining / 1000) % 60).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);
