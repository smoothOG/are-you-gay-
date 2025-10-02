const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveNoBtn() {
  const padding = 10;
  const maxX = window.innerWidth - noBtn.clientWidth - padding;
  const maxY = window.innerHeight - noBtn.clientHeight - padding;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// NO button runs away
noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("touchstart", moveNoBtn);

// YES button → go to next page (with autoplay trigger)
yesBtn.addEventListener("click", () => {
  window.location.href = "nextpage.html?play=true";
});

// Center buttons on load
window.addEventListener("load", () => {
  yesBtn.style.left = `${window.innerWidth / 2 - yesBtn.clientWidth - 20}px`;
  yesBtn.style.top = `${window.innerHeight / 2}px`;

  noBtn.style.left = `${window.innerWidth / 2 + 20}px`;
  noBtn.style.top = `${window.innerHeight / 2}px`;
});
