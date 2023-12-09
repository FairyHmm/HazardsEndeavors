const testNum = 5;

class Quiz {
  constructor(name, options, elements) {
    this.name = name;
    this.options = options;
    this.elements = elements;
  }
  weight = 1;
  value = 0;
}

// Hide main section, then start displaying questions
function initQuiz() {
  const main = document.querySelector(".main");
  const quiz = document.querySelector(".quiz");
  const submit = document.querySelector(".submit");
  main.style.opacity = "0";
  submit.style.opacity = "0";
  quiz.style.opacity = "0";
  main.style.transition = "opacity .2s";
  main.style.pointerEvents = "none";
  setTimeout(() => {
    main.style.display = "none";
    quiz.style.opacity = "1";
    quiz.style.transition = "opacity .2s";
    quiz.style.display = "grid";
    submit.style.opacity = "1";
    submit.style.transition = "opacity .2s";
    submit.style.display = "flex";
  }, 200);
  startQuiz();
}

// get questions
var quizzes = [];
function fetchData() {
  fetch("/learn/quiz/quiz.json")
    .then((response) => response.json())
    .then((data) => {
      quizzes = data.quizzes.map((quizData) => {
        const options = quizData.options.map((optionData) => ({
          choice: optionData.choice,
          explanation: optionData.explanation,
          score: optionData.score,
        }));

        return new Quiz(quizData.name, options, quizData.elements);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

fetchData();

var quizItems;
function startQuiz() {
  quizItems = [];
  quizzes.forEach((element) => {
    element.value = element.weight * (Math.random() * (2 - 1) + 1);
  });
  quizzes.sort((a, b) => a.value - b.value);
  for (let i = 0; i < testNum; i++) {
    quizItems.push(quizzes[i]);
    quizzes[i].weight *= Math.random() * (1.5 - 1.25) + 1.25;
  }
  document.getElementById("quiz-form").style.pointerEvents = "auto";
  generateQuizHTML();
}

var form;
document.addEventListener("DOMContentLoaded", function () {
  form = document.getElementById("quiz-form");
});

function generateQuizHTML() {
  form.innerHTML = "";
  quizItems.forEach((quizItem, index) => {
    // Create the question element
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<h2>${quizItem.name}</h2>`;

    // Create the options
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("buttons");

    quizItem.options.sort(() => Math.random() - 0.5);
    quizItem.options.forEach((option) => {
      const optionElement = document.createElement("input");
      optionElement.type = "radio";
      optionElement.name = `q${index}`;
      optionElement.id = `q${index}${option.choice.toLowerCase().replace(/\s/g, "-")}`;
      // Add other attributes and event listeners if needed

      const labelElement = document.createElement("label");
      labelElement.classList.add("btn");
      labelElement.htmlFor = optionElement.id;
      labelElement.id = `q${index}${option.choice.toLowerCase().replace(/\s/g, "-")}label`;
      labelElement.textContent = option.choice;

      optionsContainer.appendChild(optionElement);
      optionsContainer.appendChild(labelElement);
    });

    questionElement.appendChild(optionsContainer);
    form.appendChild(questionElement);
  });
}

let score = 0;
function calculateScore(event) {
  event.preventDefault(); // Prevent form submission

  score = 0;

  // Loop through the questions
  for (let i = 0; i <= testNum; i++) {
    // Construct the name and ID attributes of the radio buttons
    const questionName = `q${i}`;
    const radioButtons = document.getElementsByName(questionName);

    // Retrieve the selected answer for each question
    let selectedAnswer = "";
    for (let j = 0; j < radioButtons.length; j++) {
      if (radioButtons[j].checked) {
        selectedAnswer = radioButtons[j].id;
        break;
      }
    }

    // Compare the selected answer with the correct answer
    for (let j = 0; j < radioButtons.length; j++) {
      const currentID = `q${i}${quizItems[i].options[j].choice.toLowerCase().replace(/\s/g, "-")}`;
      const element = document.getElementById(currentID + "label");
      if (quizItems[i].options[j].score == 1) {
        element.classList.add("correct");
      }
      if (selectedAnswer === currentID) {
        score += quizItems[i].options[j].score;
        const element = document.getElementById(selectedAnswer + "label");
        if (quizItems[i].options[j].score == 1) {
          element.classList.add("correct");
        } else if (quizItems[i].options[j].score == 0) {
          element.classList.add("incorrect");
        } else {
          element.classList.add("partial");
        }
      }
    }
  }

  // Display the score or perform any desired actions with it
  console.log("Score:", score);
  // Display the score in the HTML
  document.getElementById("score").textContent = ` ${score}/${testNum} `;
  document.getElementById("score-container").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("quiz-form").style.pointerEvents = "none";
}

// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("share-button").addEventListener("click", shareScore);
  document.getElementById("retry-button").addEventListener("click", retryQuiz);
  document.getElementById("overlay").addEventListener("click", closePopup);
});

// Function to handle the share button click
function shareScore() {
  alert("Score copied to clipboard!");
  navigator.clipboard.writeText(`Score: ${score}/${testNum}\n${window.location.href}`);
}

// Function to handle the retry button click
function retryQuiz() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("score-container").style.display = "none";
  startQuiz();
}

function closePopup(event) {
  if (event.target.id === "overlay") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("score-container").style.display = "none";
  }
}
