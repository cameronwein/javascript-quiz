quizContainerEl = document.querySelector(".quiz-container");
startButtonEl = document.querySelector("#start-btn");

var startQuiz = function() {
    //remove quiz title and description when quiz is started
    var startTitleEl = document.querySelector("#title");
    var quizContentEl = document.querySelector("#quiz-content");
    startTitleEl.remove();
    quizContentEl.remove();
    console.dir(quizContainerEl);


};

var quizQuestions = function() {
    var quizQuestionEl = document.createElement("h2");
    quizQuestionEl.className = "quiz-question"
    quizContainerEl.appendChild(quizQuestionEl)

    
};

startButtonEl.addEventListener("click", startQuiz);