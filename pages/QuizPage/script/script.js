// Quiz data for multiple subjects
const quizData = {
  html: [
    {
      text: "What is the full form of HTML?",
      responses: [
        { text: "Hyper text marking language" },
        { text: "Hyphenation text markup language" },
        { text: "Hyper text markup language", correct: true },
        { text: "Hyphenation test marking language" },
        { text: "None of the above" },
      ],
      note: "HTML stands for HyperText Markup Language, the standard language for documents designed to be displayed in web browsers.",
    },
    {
      text: "Which HTML tag is used to define an internal style sheet?",
      responses: [
        { text: "<style>", correct: true },
        { text: "<script>" },
        { text: "<css>" },
        { text: "<link>" },
      ],
      note: "The <style> tag in HTML is used to define style information (like CSS) within an HTML document.",
    },
    {
      text: "What does the <a> tag in HTML stand for?",
      responses: [
        { text: "Anchor", correct: true },
        { text: "Append" },
        { text: "Application" },
        { text: "Argument" },
      ],
      note: "The <a> tag in HTML defines a hyperlink, which is used to link from one page to another.",
    },
    {
      text: "Which tag is used to create body text in HTML?",
      responses: [
        { text: "HEAD" },
        { text: "BODY", correct: true },
        { text: "TITLE" },
        { text: "TEXT" },
      ],
      note: "The <body> tag contains the content of an HTML document, including text, images, links, etc.",
    },
    {
      text: "What is the correct syntax for creating a hyperlink in HTML?",
      responses: [
        { text: '<a href="url">link</a>', correct: true },
        { text: '<a url="link">text</a>' },
        { text: '<link url="link">text</link>' },
        { text: '<a name="url">link</a>' },
      ],
      note: 'The correct way to define a hyperlink in HTML is to use the <a href="url">link</a> syntax.',
    },
  ],
  css: [
    {
      text: "What does CSS stand for?",
      responses: [
        { text: "Creative Style Sheets" },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Colorful Style Sheets" },
        { text: "Computer Style Sheets" },
      ],
      note: "CSS stands for Cascading Style Sheets and is used to style and lay out web pages.",
    },
    {
      text: "Which CSS property is used to change the background color?",
      responses: [
        { text: "background-color", correct: true },
        { text: "color" },
        { text: "bg-color" },
        { text: "bg-background" },
      ],
      note: "The 'background-color' property in CSS is used to set the background color of an element.",
    },
    {
      text: "How do you add a comment in a CSS file?",
      responses: [
        { text: "/* This is a comment */", correct: true },
        { text: "// This is a comment" },
        { text: "<!-- This is a comment -->" },
        { text: "' This is a comment" },
      ],
      note: "In CSS, comments are added using /* comment */ syntax.",
    },
    {
      text: "Which property is used to change the font of an element?",
      responses: [
        { text: "font-family", correct: true },
        { text: "font-style" },
        { text: "font-size" },
        { text: "font-text" },
      ],
      note: "The 'font-family' property in CSS specifies the font of the text.",
    },
    {
      text: "How do you make text bold in CSS?",
      responses: [
        { text: "font-weight: bold;", correct: true },
        { text: "font: bold;" },
        { text: "text-weight: bold;" },
        { text: "text-bold;" },
      ],
      note: "In CSS, you make text bold using the 'font-weight: bold;' property.",
    },
  ],
  javascript: [
    {
      text: "What is the correct syntax for referring to an external script called 'app.js'?",
      responses: [
        { text: '<script href="app.js">', correct: false },
        { text: '<script src="app.js">', correct: true },
        { text: '<script ref="app.js">' },
        { text: '<script link="app.js">' },
      ],
      note: 'The correct way to refer to an external JavaScript file is with the <script src="app.js"></script> tag.',
    },
    {
      text: "How do you write 'Hello World' in an alert box?",
      responses: [
        { text: 'alert("Hello World");', correct: true },
        { text: 'msgBox("Hello World");' },
        { text: 'alertBox("Hello World");' },
        { text: 'msg("Hello World");' },
      ],
      note: "To display 'Hello World' in an alert box in JavaScript, use alert(\"Hello World\");.",
    },
    {
      text: "How do you create a function in JavaScript?",
      responses: [
        { text: "function:myFunction()" },
        { text: "function myFunction()", correct: true },
        { text: "function = myFunction()" },
        { text: "def myFunction()" },
      ],
      note: "A function in JavaScript is created using the 'function' keyword followed by the function name and parentheses.",
    },
    {
      text: "How can you add a comment in JavaScript?",
      responses: [
        { text: "' This is a comment" },
        { text: "// This is a comment", correct: true },
        { text: "<!-- This is a comment -->" },
        { text: "/* This is a comment */" },
      ],
      note: "In JavaScript, single-line comments are written with //, and multi-line comments are enclosed in /* */.",
    },
    {
      text: "Which operator is used to assign a value to a variable?",
      responses: [
        { text: "=", correct: true },
        { text: "==" },
        { text: "===" },
        { text: "::" },
      ],
      note: "The assignment operator '=' is used to assign values to variables in JavaScript.",
    },
  ],
};

let currentQuestionIndex = 0;
let selectedQuestions = []; // This will store the selected subject's questions
let userResponses = [];
let countdownInterval;
let timeRemaining; // Total time remaining for the quiz in seconds
let totalTimeTaken = 0; // Total time taken by the user
let currentQuestionTimer; // Timer for each question
let questionTimeLimit = 15; // Time limit for each question in seconds
let questionTimeRemaining; // Time remaining for the current question

// Get the selected timer duration from localStorage
const selectedTime = parseInt(localStorage.getItem("quizTimer")) || 5; // Default to 5 minutes if not found
timeRemaining = selectedTime * 60; // Convert minutes to seconds

// Function to format the timer display (MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

// Function to format the question timer display (MM:SS)
function formatQuestionTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

// Start the countdown timer for the entire quiz
function startTimer() {
  const timerElement = document.getElementById("timer");

  countdownInterval = setInterval(() => {
    timerElement.textContent = formatTime(timeRemaining);
    timeRemaining--;
    totalTimeTaken++; // Increment the total time taken by the user

    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      showResult(); // End the quiz when time runs out
    }
  }, 1000);
}

// Stop the countdown timer
function stopTimer() {
  clearInterval(countdownInterval);
}

// Add the missing stopQuestionTimer function
function stopQuestionTimer() {
  clearInterval(currentQuestionTimer);
}

// Start the question timer
function startQuestionTimer() {
  const questionTimerElement = document.getElementById("question-timer");
  questionTimeRemaining = questionTimeLimit;

  clearInterval(currentQuestionTimer); // Clear any previous timer

  currentQuestionTimer = setInterval(() => {
    questionTimerElement.textContent = formatQuestionTime(
      questionTimeRemaining
    );
    questionTimeRemaining--;

    if (questionTimeRemaining < 0) {
      clearInterval(currentQuestionTimer); // Stop the timer
      lockOptions(); // Lock the options when time runs out

      // Check if auto-skip is enabled
      const autoSkip = document.getElementById("auto-skip-checkbox").checked;
      if (autoSkip) {
        nextQuestion(); // Automatically move to next question
      } else {
        // Display correct answer when time runs out
        markCorrectAnswers();
      }
    }
  }, 1000);
}

// Lock the options when time runs out
function lockOptions() {
  const options = document.querySelectorAll("#options-container .option");
  options.forEach((option) => {
    option.removeEventListener("click", selectOption);
    option.classList.add("disabled"); // Optionally, add a disabled class for visual feedback
  });
  displayAnswerNotes(); // Show notes even if the time runs out
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Initialize the quiz with shuffled questions based on the selected subject
function initializeQuiz() {
  // Get the selected subject from localStorage (either 'html', 'css', or 'javascript')
  const selectedSubject = localStorage.getItem("selectedSubject");

  // If no subject is found, default to 'html'
  const subject = selectedSubject || "html";

  // Load the questions for the selected subject
  selectedQuestions = shuffleArray([...quizData[subject]]); // Clone and shuffle the questions

  // Reset quiz state
  currentQuestionIndex = 0;
  userResponses = new Array(selectedQuestions.length).fill(null); // Reset user responses based on the selected subject's questions

  document
    .getElementById("next-button")
    .addEventListener("click", nextQuestion);
  document
    .getElementById("prev-button")
    .addEventListener("click", prevQuestion);
  document
    .getElementById("restart-button")
    ?.addEventListener("click", restartQuiz);
  document
    .getElementById("skip-button")
    .addEventListener("click", skipQuestion);

  loadQuestion();
  updateProgress();

  startTimer(); // Start the overall quiz timer
}

// Load current question
function loadQuestion() {
  const questionTitle = document.getElementById("question-title");
  const optionsContainer = document.getElementById("options-container");
  const questionFooter = document.querySelector(".questionFooter");
  const notesContainer = document.getElementById("answer-notes");

  // Reset UI elements
  questionFooter.style.display = "flex";
  document.getElementById("result-section").style.display = "none";
  notesContainer.style.display = "none"; // Hide notes when loading a new question

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.text;

  // Clear old options
  optionsContainer.innerHTML = "";

  // Generate new options
  currentQuestion.responses.forEach((response, index) => {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = String.fromCharCode(97 + index) + ". " + response.text;

    if (userResponses[currentQuestionIndex] === index) {
      option.classList.add("is-selected");
    }

    option.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(option);
  });

  // Update button states
  updateButtonState();

  // Only start the timer when moving to a new question
  startQuestionTimer();
}

// Select an option and show correct/incorrect markers
function selectOption(index) {
  // Store the user's response for the current question
  userResponses[currentQuestionIndex] = index;

  // Get all option elements
  const options = document.querySelectorAll("#options-container .option");

  // Disable further option selection
  options.forEach((option, i) => {
    option.removeEventListener("click", selectOption);
    option.classList.add("disabled"); // Add a disabled class (optional for CSS)

    // Mark the correct and incorrect answers
    if (
      i === index &&
      selectedQuestions[currentQuestionIndex].responses[i].correct
    ) {
      option.classList.add("correct"); // Green for correct answer
    } else if (i === index) {
      option.classList.add("incorrect"); // Red for incorrect answer
    }

    // Also mark the correct option in green
    if (selectedQuestions[currentQuestionIndex].responses[i].correct) {
      option.classList.add("correct");
    }
  });

  // Display the note under the options
  displayAnswerNotes();

  updateProgress();
  updateButtonState(); // Update button states and progress
}

// Function to display notes or additional info about the current question
function displayAnswerNotes() {
  const notesContainer = document.getElementById("answer-notes");
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  // Example note, you can modify this to pull real notes from the question object if needed
  notesContainer.innerHTML = `
    <p><strong>More Info:</strong> ${
      currentQuestion.note || "No additional info available."
    }</p>
  `;
  notesContainer.style.display = "block";
}

// Function to mark correct answers when the time is up or when revisiting
function markCorrectAnswers() {
  const options = document.querySelectorAll("#options-container .option");

  // Mark the correct and incorrect answers
  options.forEach((option, i) => {
    if (selectedQuestions[currentQuestionIndex].responses[i].correct) {
      option.classList.add("correct"); // Green for correct
    } else if (userResponses[currentQuestionIndex] === i) {
      option.classList.add("incorrect"); // Red for incorrect
    }
  });

  // Enable the "Next" button even if no option was selected
  document.getElementById("next-button").disabled = false;
  document.getElementById("next-button").classList.add("is-active");
  document.getElementById("next-button").style.backgroundColor = "#b000e6";
  document.getElementById("next-button").style.color = "white";
}

// Function to update the state of buttons (Next/Back)
function updateButtonState() {
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");

  // Handle Next button: Disable if no option is selected and the time hasn't run out
  if (
    userResponses[currentQuestionIndex] === null &&
    questionTimeRemaining > 0 // Ensure "Next" is enabled when time runs out
  ) {
    nextButton.disabled = true;
    nextButton.classList.remove("is-active");
    nextButton.style.backgroundColor = ""; // Reset to default
    nextButton.style.color = ""; // Reset to default text color
  } else {
    nextButton.disabled = false;
    nextButton.classList.add("is-active");
    nextButton.style.backgroundColor = "#b000e6"; // Change to CTA color
    nextButton.style.color = "white"; // Change text color to white
  }

  // Handle Back button: Disable on the first question
  if (currentQuestionIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // Change Next button to Finish on the last question
  if (currentQuestionIndex === selectedQuestions.length - 1) {
    nextButton.textContent = "Finish";
  } else {
    nextButton.textContent = "Next";
  }
}

// Go back to the previous question
function prevQuestion() {
  stopQuestionTimer(); // Stop the timer for the current question

  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
    markCorrectAnswers(); // Mark correct/incorrect answers but don't allow changing
    updateButtonState(); // Re-evaluate button states
    updateProgress(); // Decrement the progress when moving back
  }
}

// Move to the next question or show the result
function nextQuestion() {
  stopQuestionTimer(); // Stop the current question timer when moving to the next question

  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    updateProgress(); // Increment the progress when moving to the next question
  } else {
    updateProgress(100); // Set progress to 100% when showing the result
    showResult(); // Call result screen
  }
}

// Update the progress bar
function updateProgress(progressValue = null) {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");

  // Calculate progress based on question index or use provided value
  let progress =
    progressValue !== null
      ? progressValue
      : (currentQuestionIndex / selectedQuestions.length) * 100;

  // Set progress to 100% when finishing
  progressBar.value = progress;
  progressText.textContent = `${progress.toFixed(0)}% complete`;
}

// Skip the current question, mark it incorrect, and go to the next
function skipQuestion() {
  userResponses[currentQuestionIndex] = -1; // Mark as skipped (incorrect)
  nextQuestion(); // Skip also calls nextQuestion to move forward and update progress
}

// Show the result in the same card with styling improvements
function showResult() {
  const score = calculateScore();
  const resultSection = document.getElementById("result-section");
  const successIcon = document.getElementById("success-icon");
  const errorIcon = document.getElementById("error-icon");
  const resultTitle = document.querySelector(".resultTitle");
  const resultScore = document.querySelector(".resultScore");

  // Hide question-related content
  document.getElementById("question-title").style.display = "none";
  document.getElementById("options-container").style.display = "none";
  document.querySelector(".questionFooter").style.display = "none";
  document.getElementById("answer-notes").style.display = "none"; // Hide notes on result screen

  resultSection.style.display = "flex"; // Show the result section

  // Hide icons initially
  successIcon.style.display = "none";
  errorIcon.style.display = "none";

  // Show success or error icon based on score
  if (score >= selectedQuestions.length * 0.7) {
    resultTitle.textContent = "You did an amazing job!";
    successIcon.style.display = "block";
  } else if (score <= selectedQuestions.length * 0.3) {
    resultTitle.textContent = "You did a poor job!";
    errorIcon.style.display = "block";
  } else {
    resultTitle.textContent = "You did a good job!";
    successIcon.style.display = "block";
  }

  // Display score and time taken in separate <p> elements
  resultScore.innerHTML = `
    <p>Total score: ${score} / ${selectedQuestions.length}</p>
    <p>Time taken: ${formatTime(totalTimeTaken)}</p>
  `;

  stopTimer(); // Stop the overall quiz timer
}

// Calculate the score
function calculateScore() {
  let score = 0;
  selectedQuestions.forEach((question, index) => {
    if (
      userResponses[index] !== -1 &&
      question.responses[userResponses[index]]?.correct
    ) {
      score++;
    }
  });
  return score;
}

// Restart the quiz and reset the timer
function restartQuiz() {
  const selectedSubject = localStorage.getItem("selectedSubject");
  const subject = selectedSubject || "html";

  // Shuffle all questions again for the selected subject
  selectedQuestions = shuffleArray([...quizData[subject]]);

  currentQuestionIndex = 0;
  userResponses = new Array(selectedQuestions.length).fill(null);
  document.getElementById("result-section").style.display = "none"; // Hide result section
  document.getElementById("question-title").style.display = "block";
  document.getElementById("options-container").style.display = "block";
  document.querySelector(".questionFooter").style.display = "flex";

  // Reset the timer to the originally selected value
  timeRemaining = selectedTime * 60;
  totalTimeTaken = 0; // Reset total time taken
  stopTimer(); // Clear any running timer
  startTimer(); // Restart the overall quiz timer

  loadQuestion();
  updateProgress();
}

// Start the quiz
initializeQuiz();
