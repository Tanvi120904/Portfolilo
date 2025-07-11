const roles = ["Web Developer", "Coder", "Tech Enthusiast"];
let index = 0;

function changeText() {
  const textElement = document.getElementById("changing-text");
  textElement.textContent = roles[index];
  index = (index + 1) % roles.length;
}

setInterval(changeText, 2000);
changeText();
