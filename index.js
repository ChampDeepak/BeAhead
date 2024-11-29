const questions = [
    "Hello buddy, how many tasks do you want to add in your next prioritized todo list?",
    "Describe Task 1 with proper context.",
    "Describe Task 2 with proper context.",
    "Describe Task 3 with proper context.",
    "Rate your productivity on a scale of 1 to 10.",
    "How many tasks did you complete yesterday?",
    "How many tasks were you unable to complete yesterday?",
    "What were the reasons for not completing those tasks?"
  ];

  const answers = [];
  let currentQuestionIndex = 0;

  function nextQuestion() {
    const answerInput = document.getElementById("answer");
    const currentAnswer = answerInput.value.trim();

    if (!currentAnswer) {
      alert("Please provide an answer before proceeding.");
      return;
    }
 
    answers.push(currentAnswer);
    answerInput.value = ""; // Clear the input field

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      document.getElementById("question").textContent = questions[currentQuestionIndex];
    } else {
      document.getElementById("next-btn").style.display = "none";
      document.getElementById("submit-btn").style.display = "inline-block";
    }
  }

  function submitAnswers() {
    const answerInput = document.getElementById("answer").value.trim();
    if (answerInput) answers.push(answerInput); // Add last answer if present

    alert("Your responses:\n" + answers.join("\n"));
    // Further submission logic can go here (e.g., sending data to a backend).
  }

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    }
  }

  // Set the first question
  document.getElementById("question").textContent = questions[currentQuestionIndex];

