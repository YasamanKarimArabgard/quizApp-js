let option = document.querySelectorAll(".option");
let nextbtn = document.getElementById("next");
let prev = document.getElementById("prev");
let questionP = document.getElementById("question");
let form = document.getElementById("active");
let startbtn = document.getElementById("start");
let headerQuestion = document.getElementById("header-question");
let questionNumber = document.getElementById("number");
let timer = document.getElementById("timer");
let timeOver = document.getElementById("timeover");
let answerContent = document.getElementById("answer-content");
let questionNum = 1;
let sec = 30;
let i = 0;

//our questions
const myQuestion = [{
        id: 1,
        question: "what is the sky color?",
        answers: ["red", "black", "blue", "pink"],
        correctAnswer: "c",
    },
    {
        id: 2,
        question: "who is the cat enemy ? ",
        answers: ["ship", "elephent", "dog", "chicken"],
        correctAnswer: "c",
    },
    {
        id: 3,
        question: "what we breathe to stay alive?",
        answers: ["H2o", "Co2", "S", "Br"],
        correctAnswer: "a",
    },
];

//show next question
nextbtn.addEventListener("click", function nextQuestion() {
    buildQuiz();
    questionPlus();
});

const questionPlus = () => {
    questionNumber.innerHTML = "Q number : " + questionNum + " / 3"; //when click on next the q number++;
    questionNum++;
    if (questionNum == 3) {
        return;
    }
}

startbtn.addEventListener("click", function startGame() {
    buildQuiz();
    questionPlus();
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
    questionP.textContent = myQuestion[i].question;
    myQuestion[i].answers.forEach((answer) => {
        answerContent.innerHTML += `<div class="option">
                <input type="radio" id="${answer}" value="${answer}" />
                <label for="${answer}">${answer}</label>
            </div>`
    });
    i++;
};