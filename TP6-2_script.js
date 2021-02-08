const blueSquare = document.querySelector("#blue-square");
const pageTitle = document.getElementById("page-title");
const h2s = document.querySelectorAll("h2");

h2s.forEach(h2 => h2.style.color = "black");

blueSquare.style.marginLeft = "0px";
blueSquare.style.backgroundColor = "blue";

setInterval(() => {
  blueSquare.style.marginLeft =
    parseInt(blueSquare.style.marginLeft) === 0 ? "300px" : "0px";

  blueSquare.style.backgroundColor =
    blueSquare.style.backgroundColor === "blue" ? "red" : "blue";
}, 1000 / 4);

pageTitle.onmouseenter = () => {
  pageTitle.style.backgroundColor = "purple";

  clearInterval(page);

  setTimeout(() => {
    pageTitle.style.backgroundColor = "black";
  }, 500);
};

pageTitle.onmouseleave = () => {
  pageTitle.style.backgroundColor = "white";

  setTimeout(() => {
    pageTitle.style.backgroundColor = "turquoise";
  }, 500);
};

const page = setInterval(() => {
  pageTitle.style.color =
    pageTitle.style.color === "white" ? "yellow" : "white";
  
  h2s.forEach(h2 => {
    if (pageTitle.style.color === "white")
      h2.style.color = "black";
    else h2.style.color = "white"
  });
}, 1500);
