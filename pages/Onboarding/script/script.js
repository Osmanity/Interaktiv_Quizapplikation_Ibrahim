document.addEventListener("DOMContentLoaded", function () {
  const selectedSubject = localStorage.getItem("selectedSubject");
  const subjectElement = document.getElementById("selected-subject");
  const startQuizBtn = document.getElementById("start-quiz-btn");
  const difficultySelect = document.getElementById("difficulty");
  const numQuestionsSelect = document.getElementById("num-questions");
  const timerSelect = document.getElementById("quiz-timer");

  // Display the selected subject from localStorage
  subjectElement.textContent = selectedSubject
    ? selectedSubject.toUpperCase()
    : "";

  // Enable the "Start Quiz Now!" button when all options are selected
  function enableStartQuizBtn() {
    if (
      difficultySelect.value &&
      numQuestionsSelect.value &&
      timerSelect.value
    ) {
      startQuizBtn.disabled = false;
    } else {
      startQuizBtn.disabled = true;
    }
  }

  // Add event listeners for enabling the button
  difficultySelect.addEventListener("change", enableStartQuizBtn);
  numQuestionsSelect.addEventListener("change", enableStartQuizBtn);
  timerSelect.addEventListener("change", enableStartQuizBtn);

  // When "Start Quiz Now!" is clicked, save the settings and redirect
  startQuizBtn.addEventListener("click", function () {
    const difficulty = difficultySelect.value;
    const numQuestions = numQuestionsSelect.value;
    const quizTimer = timerSelect.value;

    // Save the selected options in localStorage
    localStorage.setItem("quizDifficulty", difficulty);
    localStorage.setItem("numQuestions", numQuestions);
    localStorage.setItem("quizTimer", quizTimer);

    // Redirect to the quiz page
    window.location.href = "../QuizPage/quiz.html";
  });
});
