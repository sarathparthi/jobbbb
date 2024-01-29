const questions = [
    {
        question: "Which is the",
        answers:[
            {text:"hello", correct: false},
            {text:"hello", correct: true},
            {text:"hello", correct: false},
            {text:"hello", correct: false}, 
        ]
    },
    {
        question: "Wdsjvhsih",
        answers:[
            {text:"hello", correct: false},
            {text:"hello", correct: true},
            {text:"hello", correct: false},
            {text:"hello", correct: false},            
        ]
    },
    {
        question: "Which is the",
        answers:[
            {text:"hello", correct: false},
            {text:"hello", correct: true},
            {text:"hello", correct: false},
            {text:"hello", correct: false},
        ]
    },
    {
        question: "Which is the",
        answers:[
            {text:"hello", correct: false},
            {text:"hello", correct: true},
            {text:"hello", correct: false},
            {text:"hello", correct: false},   
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstchild){
        answerButtons.removechild(answerButtons.firstchild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
             button.classList.add("correct");
        } 
         button.disabled = true;
    });
    nextbutton.style.display = "block";    
}    

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!` ;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";    
}
function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }   
}


function handleNextButton(){
    currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener ("click", ()=>{
    if(currentQuestionIndex < questions.length) {
         handleNextButton(); 3
     }else{
         startQuiz();
    } 
});
