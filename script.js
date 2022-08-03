const quizDb=[
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello Truth Markup Language",
        b:"Hyper Texr Markup Language",
        c:"Htmi Text MarkUp Language",
        d:"Hyper Text Markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is this keyword work in arrow function?",
        a:"Take parent adress",
        b:"Global Adress",
        c:"APne ghr  k Adress",
        d:"Errror",
        ans:"ans2"
    },
    {
        question:"Q3: Is Newton School is a Fraud?",
        a:"Yes",
        b:"No",
        c:"Dekhenge",
        d:"😆",
        ans:"ans1"
    },
    {
        question:"Q4: Kya aapne 3 lkh Tyar rkhe h ",
        a:"No",
        b:"Yes",
        c:"Dekhenge",
        d:"😆",
        ans:"ans4"
    },
]


const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");

const answers=document.querySelectorAll(".answer");
const submit=document.querySelector("#submit");

const showScore=document.querySelector("#showscore");

let questionCount=0;
let score=0;
function loadQuestion()
{
    const questionList=quizDb[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;

    

}
loadQuestion();


//check if checked
const getCheckanswer=()=>{
    let answer;
answers.forEach((currentAnswerElement)=>{
    if(currentAnswerElement.checked)
    {
        answer=currentAnswerElement.id;

    }
})
return answer;





}
submit.addEventListener("click",()=>{
    const checkAnswer=getCheckanswer();
    console.log(checkAnswer);
    if(checkAnswer==quizDb[questionCount].ans)
    {
        score++;
    }
    questionCount++;
//to unselecte checked answer
    const desectall=()=>{
        
        answers.forEach((currentElement)=>currentElement.checked=false);
    }
    desectall();

    if(questionCount<quizDb.length)
    {
        loadQuestion();
    }
    else
    {
     showScore.innerHTML=`
     <h3>Your score is :${score}/${quizDb.length}😎😉</h3>
     <button  class="btn" onclick="location.reload()">Play again</button>
     `
     showScore.classList.remove('scoreArea');
    }
})