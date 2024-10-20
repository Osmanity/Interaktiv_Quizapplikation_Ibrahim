// script.js
document.addEventListener("DOMContentLoaded", function () {
  const startQuizButtons = document.querySelectorAll(".start-quiz-btn");

  startQuizButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const subject = this.closest(".card").getAttribute("data-subject");
      localStorage.setItem("selectedSubject", subject);
      window.location.href = "./pages/Onboarding/onboarding.html";
    });
  });
});
