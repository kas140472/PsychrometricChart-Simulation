
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
    question: "Psychrometry is the study of the properties of:",
    answers: {
      a: "Dry air",
      b: "A mixture of air and water vapour",
      c: "Ideal gas",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "A mixture of various gases that constitute air and water is known as:",
    answers: {
      a: "Ideal air",
      b: "Natural air",
      c: "Moist air",
      d: "Normal air"
    },
    correctAnswer: "c"
  },

  {
    question: "When there is a neutral equilibrium between the moist air and the liquid or solid phases of water, the air is known as:",
    answers: {
      a: "Saturated air",
      b: "Supersaturated air",
      c: "Desiccated air",
      d: "None of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "The saturation curve in a psychrometric chart is the curve at:",
    answers: {
      a: "0% relative humidity",
      b: "Humidity ratio 0",
      c: "Humidity ratio 1",
      d: "100% relative humidity"
    },
    correctAnswer: "d"
  }

];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
