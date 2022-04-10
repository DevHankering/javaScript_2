const red = document.getElementsByClassName("red")[0];
const cyan = document.getElementsByClassName("cyan")[0];
const violet = document.getElementsByClassName("violet")[0];
const orange = document.getElementsByClassName("orange")[0];
const pink = document.getElementsByClassName("pink")[0];
const center = document.getElementsByClassName("center")[0];

var neww = (element) => {
  element.addEventListener("mouseenter", () => {
    center.style.background = window.getComputedStyle(element).backgroundColor;
  });
};
neww(red);
neww(cyan);
neww(violet);
neww(orange);
neww(pink);
