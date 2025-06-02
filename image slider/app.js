const pictures = ["0", "1", "2", "3", "4", "5"];

let btns = document.querySelectorAll(".btn");
let imgCont = document.querySelector(".img-cont");
let count = 0;

btns.forEach((button) => {
  if (button.classList.contains("left-btn")) {
    button.addEventListener("click", (ev) => {
      count--;
      if (count < 0) {
        count = pictures.length - 1;
      }
      imgCont.style.background = `url(./imgs/${count}.avif)`;
    });
  }
  if (button.classList.contains("right-btn")) {
    button.addEventListener("click", (ev) => {
      count++;
      if (count > pictures.length - 1) {
        count = 0;
      }
      imgCont.style.background = `url(./imgs/${count}.avif)`;
    });
  }
});
