//Hide the result div
const resultContainer = document.getElementById("result-container")
resultContainer.style.display = "none"

//Get correct answer input

const correctChoice1 = document.getElementById("q1-choice3");
const correctChoice2 = document.getElementById("q2-choice2");
const correctChoice3 = document.getElementById("q3-choice1");
const correctChoice4 = document.getElementById("q4-choice3");
const correctChoice5 = document.getElementById("q5-choice2");
const correctChoice6 = document.getElementById("q6-choice1");
const correctChoice7 = document.getElementById("q7-choice3");
const correctChoice8 = document.getElementById("q8-choice2");
const correctChoice9 = document.getElementById("q9-choice3");
const correctChoice10 = document.getElementById("q10-choice1");

//Get submit input and add 'click' event listener

const submit = document.getElementById("submit")
submit.addEventListener('click', (e) => {
    e.preventDefault()
    getResult()
});

//Function for submit event hundler

let questionOneMark;
let questionTwoMark;
let questionThreeMark;
let questionFourMark;
let questionFiveMark;
let questionSixMark;
let questionSevenMark;
let questionEightMark;
let questionNineMark;
let questionTenMark;



//Event handler for displaying results

function getResult(){
    if(correctChoice1.checked){
        
        questionOneMark = 2;
    }else{
        questionOneMark = 0
    }

   if(correctChoice2.checked){
        questionTwoMark = 2;
    }else{
        questionTwoMark = 0
    }
    
    if(correctChoice3.checked){
        questionThreeMark = 2;
    }else{
        questionThreeMark = 0
    }
    if(correctChoice4.checked){
        questionFourMark = 2;
    }else{
        questionFourMark = 0
    }
    if(correctChoice5.checked){
        questionFiveMark = 2;
    }else{
        questionFiveMark = 0
    }
    if(correctChoice6.checked){
        questionSixMark = 2;
    }else{
        questionSixMark = 0
    }
    if(correctChoice7.checked){
        questionSevenMark = 2;
    }else{
        questionSevenMark = 0
    }
    if(correctChoice8.checked){
        questionEightMark = 2;
    }else{
        questionEightMark = 0
    }
    if(correctChoice9.checked){
        questionNineMark = 2;
    }else{
        questionNineMark = 0
    }
    if(correctChoice10.checked){
        questionTenMark = 2;
    }else{
        questionTenMark = 0
    }

    let score = questionOneMark + questionTwoMark + questionThreeMark + 
    questionFourMark + questionFiveMark + questionSixMark +
    questionSevenMark + questionEightMark + questionNineMark + questionTenMark

    //Calculate percentage

    let percentMessage = document.getElementById("retry");

    let percentage = (score / 20) * 100;

    //Display various messages depending on percentage score

    if(percentage >= 80){
        percentMessage.innerHTML = 
        `
        <h3 id="percent-msg">You scored excellently.</h3>
        <button id="home" class="try-again">Back to home</button>
        `
    }else if(percentage >= 50 && percentage < 80){
        percentMessage.innerHTML = 
        `
        <h3 id="percent-msg">You scored fairly.</h3>
        <button id="home" class="try-again">Back to home</button>
        `
    }else{
        percentMessage.innerHTML = 
        `
            <h3 id="percent-msg">You scored poorly.</h3>
            <button id="to-home" class="try-again">Retake test</button>
        `
    }

    //Function to take user back to homepage
    const toHome = document.getElementById("home");
    const retakeTestBtn = document.getElementById("to-home");
    
    if(retakeTestBtn)
        retakeTestBtn.addEventListener('click', getUserToHomePage)
    if(toHome)
        toHome.addEventListener('click', getUserToHomePage)

    function getUserToHomePage(){
        window.location.replace("index.html")
    }

    //Hide the questions when submit button is clicked
    const questionTag = document.getElementById("quiz-form")
    questionTag.style.display = "none"

    //Show the result container div
    resultContainer.style.display = "flex"

    const resultDiv = document.getElementById("result-div")
    const percentDiv = document.getElementById("percent-div")

    resultDiv.innerHTML = `<h2 id="score">Your score is ${score} out of 20</h2>`
    
    percentDiv.innerHTML = `<h2 id="score">You have ${percentage}% score</h2>`

}
