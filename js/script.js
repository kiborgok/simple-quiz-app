//Hide the result div
const resultDiv = document.getElementById("result-div")
resultDiv.style.display = "none"

//Get correct answer input

const correctChoice1 = document.getElementById("q1-choice1");
const correctChoice2 = document.getElementById("q2-choice1");
const correctChoice3 = document.getElementById("q3-choice1");
const correctChoice4 = document.getElementById("q4-choice1");
const correctChoice5 = document.getElementById("q5-choice1");
const correctChoice6 = document.getElementById("q6-choice1");
const correctChoice7 = document.getElementById("q7-choice1");
const correctChoice8 = document.getElementById("q8-choice1");
const correctChoice9 = document.getElementById("q9-choice1");
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

function getResult(){
    if(correctChoice1.checked){
        
        questionOneMark = 2;
    }else{
        questionOneMark = 0
    }

   if(correctChoice2.checked){
        console.log(correctChoice2.checked)
        questionTwoMark = 2;
    }else{
        questionTwoMark = 0
    }
    
    if(correctChoice3.checked){
        console.log(correctChoice3.checked)
        questionThreeMark = 2;
    }else{
        questionThreeMark = 0
    }
    if(correctChoice4.checked){
        console.log(correctChoice4.checked)
        questionFourMark = 2;
    }else{
        questionFourMark = 0
    }
    if(correctChoice5.checked){
        console.log(correctChoice5.checked)
        questionFiveMark = 2;
    }else{
        questionFiveMark = 0
    }
    if(correctChoice6.checked){
        console.log(correctChoice6.checked)
        questionSixMark = 2;
    }else{
        questionSixMark = 0
    }
    if(correctChoice7.checked){
        console.log(correctChoice7.checked)
        questionSevenMark = 2;
    }else{
        questionSevenMark = 0
    }
    if(correctChoice8.checked){
        console.log(correctChoice8.checked)
        questionEightMark = 2;
    }else{
        questionEightMark = 0
    }
    if(correctChoice9.checked){
        console.log(correctChoice9.checked)
        questionNineMark = 2;
    }else{
        questionNineMark = 0
    }
    if(correctChoice10.checked){
        console.log(correctChoice10.checked)
        questionTenMark = 2;
    }else{
        questionTenMark = 0
    }

    let score = questionOneMark + questionTwoMark + questionThreeMark + 
    questionFourMark + questionFiveMark + questionSixMark +
    questionSevenMark + questionEightMark + questionNineMark + questionTenMark

    console.log(score)

}
