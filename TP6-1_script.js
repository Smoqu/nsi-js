const strongs = document.querySelectorAll("strong");
const h2s = document.querySelectorAll("h2");
const h1 = document.querySelector("h1");

h1.onmouseenter = () => {
  h1.style.backgroundColor = "#f6a709";
};

h1.onmouseleave = () => {
  h1.style.backgroundColor = "";
};

h2s.forEach((h2) => {
  h2.onclick = () => {
    let text = h2.innerText;

    h2.innerText = " ~ " + text + " ~ ";
  };
});

strongs.forEach((strong) => {
  let onHover = false;
  strong.onmouseover = () => {
    onHover = !onHover;

    strong.style.backgroundColor = onHover ? "#e8ff23" : "#12ebd9";
  };
});
