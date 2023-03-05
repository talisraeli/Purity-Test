const checkboxs = document.querySelectorAll("input[type=checkbox]");
const scoreArea = document.querySelector(".score-area");
const scoreElement = document.querySelector(".score");

function calculateScore() {
  let score = 100;
  checkboxs.forEach((cb) => {
    if (cb.checked) {
      score--;
    }
  });
  scoreElement.textContent = score;
  scoreArea.classList.add("show");
}

function startOver() {
  scoreArea.classList.remove("show");
  checkboxs.forEach((cb) => {
    cb.checked = false;
  });
}
