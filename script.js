// 🎯 Grab the HTML elements where we'll display the countdown numbers
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

// 🎉 The target: New Year's Day 2026, turned into a timestamp (a big number)
const newYearTime = new Date("jan 1,2027 00:00:00").getTime();
// ▶️ Run the countdown once immediately, so numbers show right away
// (without this, the page would be blank for the first second)
updateCountdown();

function updateCountdown() {
  // ⏰ Get the current time RIGHT NOW, as a timestamp
  const now = new Date().getTime();

  // 📏 Find the gap: how many milliseconds are left until New Year?
  const gap = newYearTime - now;

  // 🧮 Set up conversion units (all based on milliseconds)
  const second = 1000; // 1 second  = 1000 ms
  const minute = second * 60; // 1 minute  = 60 seconds
  const hour = minute * 60; // 1 hour    = 60 minutes
  const day = hour * 24; // 1 day     = 24 hours

  // 🔢 Break the gap down into days, hours, minutes, seconds
  const d = Math.floor(gap / day); // whole days left
  const h = Math.floor((gap % day) / hour); // leftover hours
  const m = Math.floor((gap % hour) / minute); // leftover minutes
  const s = Math.floor((gap % minute) / second); // leftover seconds

  // 🖥️ Update the webpage with the new numbers
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  // 🔁 Wait 1 second, then run this whole function again
  // This is what makes the countdown actually "tick"
  setTimeout(updateCountdown, 1000);
}
