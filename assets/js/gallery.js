const slider = document.getElementById("slider"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", () => {
  slider.scrollBy(blockWidth, 0);
});

prev.addEventListener("click", () => {
  slider.scrollBy(-blockWidth, 0);
});

let blockWidth = slider.offsetWidth;
window.addEventListener("resize", () => {
  blockWidth = slider.offsetWidth;
});
