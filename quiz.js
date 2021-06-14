let submitButton = document.getElementById("submit");
let nextButton = document.getElementById("next");
let prev = document.getElementById("previous");
let questionP = document.getElementById("question");
let form = document.getElementById("active");
let startbtn = document.getElementById("start");
let headerQuestion = document.getElementById("header-question");
let timer = document.getElementById("timer");
let timeOver = document.getElementById("timeover");
let answerContent = document.getElementById("answer-content");
let sec = 30;
let i = 0;

//our questions
const myQuestion = [{
        question: "what is the sky color?",
        answers: {
            a: "blue",
            b: "red"
        },
        correctAnswer: "a",
    },
    {
        question: "who is the cat enemy ? ",
        answers: {
            a: "ship",
            b: "elephent",
            c: "dog",
            d: "chicken"
        },
        correctAnswer: "c",
    },
    {
        question: "what we breathe to stay alive?",
        answers: {
            a: "H2o",
            b: "Co2",
            c: "S"
        },
        correctAnswer: "a",
    },
];

startbtn.addEventListener("click", function startGame() {
    buildQuiz();
    pageLoad();
    startbtn.remove("#start"); //to hide start button
    form.style.display = "block"; //to show form
    headerQuestion.style.display = "block"; //to show header
    headerQuestion.style.display = "flex"; //to diplay it in js flex
});

const myTimer = () => {
    timer.innerHTML = sec + "s of 30s";
    sec--;
    if (sec == -1) {
        clearInterval(alertMe());
        form.style.display = "none";
        timer.style.display = "none";
        headerQuestion.style.display = "none";
        timeOver.style.display = "block";
    }
}

const pageLoad = () => startbtn.onclick = alertMe();


const alertMe = () => setInterval(myTimer, 1000);

const buildQuiz = () => {
    const output = [];
    myQuestion.forEach(
        (question, questionNumber) => {
            const answers = [];

            for (answer in question.answers) {
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${answer}">
              ${answer} :
              ${question.answers[answer]}
            </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${question.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    answerContent.innerHTML = output.join('');
}


submitButton.addEventListener("click", () => {
    const answerContainers = answerContent.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestion.forEach((question, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === question.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = "darkgreen";
        } else {
            answerContainers[questionNumber].style.color = "darkred";
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestion.length}`;
});