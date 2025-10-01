const themeBtn = document.getElementById("theme-btn");
const lines = document.querySelectorAll(".line");
const sections = document.querySelectorAll("section");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  if (scrollPos < sections[1].offsetTop - window.innerHeight / 2) {
    setActiveLine(0);
  } else if (scrollPos < sections[2].offsetTop - window.innerHeight / 2) {
    setActiveLine(1);
  } else {
    setActiveLine(2);
  }
});

function setActiveLine(index) {
  lines.forEach(line => line.classList.remove("active"));
  lines[index].classList.add("active");
}
