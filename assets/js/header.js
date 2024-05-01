let header = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY > 50) {
    header.style.background = "#07086C";
  } else {
    header.style.background = "rgba(0, 0, 0, 0)";
  }
};
