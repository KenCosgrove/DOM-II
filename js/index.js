// Your code goes here
const nav = document.querySelector(".main-navigation");
const intro = document.querySelector(".intro");
const copyright = document.querySelector(".footer");
const buttons = document.querySelector(".btn");
const content = document.querySelector(".text-content");
const destination = document.querySelector(".content-destination");
const inverse = document.querySelector(".content-section.inverse-content p");

nav.addEventListener("mouseover", () => {
  nav.style.backgroundColor = "red";
});

intro.addEventListener("click", () => {
  intro.style.color = "red";
});

document.addEventListener("keydown", () => {
  if (event.keyCode === 66) {
    copyright.style.fontWeight = "bold";
  }
});

document.addEventListener("scroll", () => {
  nav.style.backgroundColor = "lightblue";
});

window.addEventListener("load", (event) => {
  content.style.color = "green";
});

window.addEventListener("resize", () => {
  destination.style.backgroundColor = "yellow";
});

buttons.addEventListener("dblclick", () => {
  buttons.style.backgroundColor = "pink";
});
