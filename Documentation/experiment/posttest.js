
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "At a relative humidity of 70% which of the following is true?",
      answers: {
        a: "Dew point temperature is less than the wet bulb temperature.",
        b: "Dry bulb temperature is less than the dew point temperature.",
        c: "Wet bulb temperature is more than dry bulb temperature.",
        d: "The dew point temperature and the wet bulb temperature are equal."
      },
      correctAnswer: "a"
    },
    {
      question: "If the wet bulb temperature is 15℃ and the relative humidity is 50%, find the humidity ratio of the air.",
      answers: {
        a: "0.010",
        b: "0.008",
        c: "0.005",
        d: "0.003"
      },
      correctAnswer: "b"
    },
    {
      question: "If the dry bulb temperature is 37℃ and the relative humidity is 50%, find the enthalpy of the air.",
      answers: {
        a: "88.31 kJ/kg dry air",
        b: "65.24 kJ/kg dry air",
        c: "43.56 kJ/kg dry air",
        d: "22.98 kJ/kg dry air"
      },
      correctAnswer: "a"
    },
    {
      question: "If the wet bulb temperature is 15℃ and the relative humidity is 50%, find the dew point temperature of the air.",
      answers: {
        a: "5℃",
        b: "10℃",
        c: "15℃",
        d: "20℃"
      },
      correctAnswer: "b"
    }

  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
