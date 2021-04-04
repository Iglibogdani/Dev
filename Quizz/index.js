"use strict";
let arr;
var counterForCorrect = 0;
let counterForScore = 0;

const domSelectors = {
  startBtn: document.querySelector(".start"),
  container: document.querySelector(".container"),
  scoreTable: document.querySelector(".score-table"),
  questionsTable: document.querySelector(".questions"),
  singleQuestion: document.querySelector(".question"),
  checkButton: document.querySelector(".check"),
  scoreText: document.querySelector(".score-text"),
  end: document.querySelector(".play-again"),
};

domSelectors.scoreTable.classList.add("hide");
domSelectors.questionsTable.classList.add("hide");
// container.appendChild(scoreTable);

//Calculate random numbers
function shuffle(array) {
  let i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
arr = shuffle([1, 2, 3, 4, 5]);

function whichOptBlock(array) {
  let char;

  if (array == 1) {
    return (char = "");
  } else if (array == 2) {
    return (char = "-");
  } else if (array == 3) {
    return (char = "--");
  } else if (array == 4) {
    return (char = "---");
  } else if (array == 5) {
    return (char = "----");
  }
}
let classChar;

//Show random questions
function showQuestions() {
  let arrBtn = shuffle([1, 2, 3, 4, 5]);

  domSelectors.startBtn.classList.add("hide");
  domSelectors.questionsTable.classList.remove("hide");

  for (let i = 0; i < arr.length; i++) {
    domSelectors.questionsTable.appendChild(
      document.querySelector(".q" + arr[i])
    );
    console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {
      classChar = whichOptBlock(arr[i]);
      document
        .querySelector(".opt-" + arr[i])
        .appendChild(document.querySelector(".btn" + classChar + arrBtn[j]));
    }
  }
}

domSelectors.startBtn.addEventListener("click", showQuestions);

for (let i = 1; i <= arr.length; i++) {
  classChar = whichOptBlock(i);
  for (let j = 1; j <= arr.length; j++) {
    document
      .querySelector(".btn" + classChar + j)
      .addEventListener("click", function selectAnswer(e) {
        e.target.classList.add("orangeColor");
        if (e.target) {
          countScore();
        }
        if (
          e.target.textContent === "Ronnie Coleman" ||
          e.target.textContent === "Tommy" ||
          e.target.textContent === "Ragnar" ||
          e.target.textContent === "150k dollars" ||
          e.target.textContent === "Ezio"
        ) {
          e.target.textContent = e.target.textContent + " ";
          countCorrect();
        }
        for (let k = 1; k <= arr.length; k++) {
          classChar = whichOptBlock(i);
          if (document.querySelector(".btn" + classChar + k) === e.target) {
            continue;
          }
          console.log(document.querySelector(".btn" + classChar + k));
          document.querySelector(".btn" + classChar + k).classList.add("hide");
        }
      });
  }
}

function countScore() {
  counterForScore++;
  console.log(counterForScore);
  return counterForScore;
}

function countCorrect() {
  counterForCorrect++;
  return counterForCorrect;
}

domSelectors.checkButton.addEventListener("click", function checkAnswers(e) {
  if (e.target) {
    if (countScore() - 1 < 5) {
      alert("Please answer every single question");
    } else {
      domSelectors.scoreTable.classList.remove("hide");
      domSelectors.questionsTable.classList.add("hide");
      domSelectors.scoreText.textContent = `You scored ${
        countCorrect() - 1
      }/5 correct answers!`;
    }
  }
});

function reload() {
  reload = location.reload();
}
// Event listeners for reload
domSelectors.end.addEventListener("click", reload, false);
