function toggleLearn() {
  if (document.getElementById("quiz-list").classList.contains("show")) {
    document.getElementById("quiz-list").classList.remove("show");
    setTimeout(() => {
      document.getElementById("learn-list").classList.toggle("show");
    }, 1000);
  } else {
    document.getElementById("learn-list").classList.toggle("show");
  }
}

function toggleQuiz() {
  if (document.getElementById("learn-list").classList.contains("show")) {
    document.getElementById("learn-list").classList.remove("show");
    setTimeout(() => {
      document.getElementById("quiz-list").classList.toggle("show");
    }, 1000);
  } else {
    document.getElementById("quiz-list").classList.toggle("show");
  }
}

window.onclick = function (event) {
  if (!event.target.matches(".learn")) {
    if (document.getElementById("learn-list").classList.contains("show")) {
      document.getElementById("learn-list").classList.remove("show");
    }
  }
  if (!event.target.matches(".quiz")) {
    if (document.getElementById("quiz-list").classList.contains("show")) {
      document.getElementById("quiz-list").classList.remove("show");
    }
  }
};
