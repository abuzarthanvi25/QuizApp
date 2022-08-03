var questions = [
    {
        question: 'What is the the capital of Pakistan?',
        option: ['Karachi', 'Islamabad', 'Peshawar', 'Quetta'],
        correctOption: 'Islamabad'
    },
    {
        question: 'What does OOP stands for?',
        option: ['HTML', 'Object Oriented Programming', 'Objected Operational Programming', 'SQL'],
        correctOption: 'Object Oriented Programming'
    },
    {
        question: 'What is does SQL stands for?',
        option: ['OOP', 'HTML', 'Structured Query Language', 'Server Quota Link'],
        correctOption: 'Structured Query Language'
    },
    {
        question: 'What is the HTML tag that creates a link',
        option: ['p', 'link', 'canvas', 'a'],
        correctOption: 'a'
    },
    {
        question: 'What does JS Stands for?',
        option: ['JavaScript', 'JavaScore', 'JackpotScreen', 'JooteKaSole'],
        correctOption: 'JavaScript'
    },
    {
        question: 'Which CSS property is used for text color?',
        option: ['margin:', 'style:', 'background:', 'color:'],
        correctOption: 'color:'
    },
    {
        question: 'What does CSS stands for?',
        option: ['Castle Stand System', 'Cascading Style Sheet', 'Cascading Stencil Sheet', 'Color Style Sheet'],
        correctOption: 'Cascading Style Sheet'
    },
    {
        question: 'Which is used for storing data in JavaScript?',
        option: ['Conditional Statements', 'Loops', 'Functions', 'Variable'],
        correctOption: 'Variable'
    },
    {
        question: 'Which type of JavaScript language is ?',
        option: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
        correctOption: 'Object-Based'
    },
    {
        question: 'The "function" and " var" are known as:',
        option: ['Keypoints', 'Data types', 'Declaration statements', 'Prototypes'],
        correctOption: 'Declaration statements'
    },
]

var currentQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var result = document.getElementById('result');
var passStatus = document.getElementById('status');
var clearResult = document.getElementById('clear');
var indexNumber = 0;
var marks = 0;
var percentage;

function renderQuiz(){
    question.innerHTML = questions[indexNumber].question;
    totalQuestions.innerHTML = questions.length
    currentQuestion.innerHTML = indexNumber + 1
    answers.innerHTML = ''
    for(var i = 0; i < questions[indexNumber].option.length; i++){
        answers.innerHTML += `
        <div class="col-md-6 py-2">
            <button onclick = "authenticateAnswer(this, questions[indexNumber].correctOption)" class="btn fs-5 w-100 btn-info p-2">${questions[indexNumber].option[i]}</button>
        </div>`
    }  
}
renderQuiz()


function next(){
    if(indexNumber+1 == questions.length){
        alert("Quiz Completed")
        indexNumber = 0
        result.innerHTML = `Your Score is ${marks}`
        if(marks<5){
            passStatus.className += ' text-danger'
            passStatus.innerHTML = 'FAIL!'
        }
        else{
            passStatus.className += ' text-success'
            passStatus.innerHTML = `Passed with ${percentage = (marks/questions.length)*100}%`
        }
        
        renderQuiz()
    }
    else{
        indexNumber = indexNumber + 1
        renderQuiz()
    }
}
function authenticateAnswer(selectedAnswer, correctAnswer){
    // console.log(correctAnswer)
    // console.log(userOption)
    var userOption = selectedAnswer.innerHTML
    if(userOption == correctAnswer){
        marks = marks + 1;
    }
    var allBtns = answers.getElementsByTagName('button');
    // console.log(allBtns)
    for(var i = 0; i < allBtns.length; i++){
        allBtns[i].disabled = true;
        if(allBtns[i].innerHTML == correctAnswer){
            allBtns[i].className += ' bg-success'
            allBtns[i].className += ' fw-bold'
        }
        else{
            allBtns[i].className += ' bg-danger'
        }
    }
}

function clearData(){
    passStatus.innerHTML = ''
    result.innerHTML = ''
}
