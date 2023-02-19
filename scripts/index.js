import navbar from "../component/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()


const quizData = [
        {
                question : "1) Which one is the smallest ocean in the World?",
                a :"Indian",
                b :"Pacific",
                c :"Atlantic",
                d :"Arctic",
               ans : "Arctic"
         },
        {
                question : "2) Dead Sea is located between which two countries?",
               a : "Jordanand Sudan",
                b :"Jordan and Israel",
                c : "Turkey and UAE",
                d :"UAE and Egypt",
                ans : "Jordan and Israel"
        },
        {
            question : "3) In which ocean ‘Bermuda Triangle’ region is located?",
            a :"Atlantic",
            b :"Indian",
            c :"Pacific",
            d :"Arctic",
            ans :"Atlantic"
        },
        {
            question : "4) Which country is also known as the ‘Land of Rising Sun’?",
            a : "Japan",
            b :"New Zealand",
            c : "Fiji",
            d :"China",
            ans : "Japan"
        },
        {
            question : "5) Which continent has the highest number of countries?",
            a :"Asia",
            b :"Europe",
            c :"North America",
            d :"Africa",
            ans : "Africa"
        },
        {
            question : "6) Total number of oceans in the World is",
            a : "3",
            b :"5",
            c : "7",
            d :"12",
            ans : "5"
        },
        {
            question : "7) Which one is the largest tropical rain forest in the world?",
            a : "Amazon",
            b :"Bosawas",
            c : "Southeast Asian Rain Forest",
            d :"Daintree Rain Forest",
            ans : "Amazon"
        },
        {
            question : "8) Who invented the internet?",
            a : "Robert E. Kahn and Vint Cerf",
            b :"Philip Diehl",
            c : "William Sturgeon",
            d :"Frederick Banting",
            ans : "Robert E. Kahn and Vint Cerf"
        },
        {
            question : "9) Who invented the telephone?",
            a : "J.L Baird",
            b :"Alexander Graham Bell",
            c : "Marconi",
            d :" James Dewar",
            ans : "Alexander Graham Bell"
        },
        {
            question : "10) Who among the following invented the Email?",
            a : "Ralph H. Baer",
            b :"Vint Cerf",
            c : "Steve Jobs",
            d :"Shiva Ayyadurai",
            ans : "Shiva Ayyadurai"
        }

]
       var quiz= document.getElementById('quiz')
       var answerEls = document.querySelectorAll('.answer')
       var questionEl = document.getElementById('question')
       var a_text = document.getElementById('a_text')
       var b_text = document.getElementById('b_text')
       var c_text = document.getElementById('c_text')
       var d_text = document.getElementById('d_text')
       var submitBtn = document.getElementById('submit')


var currentQuiz = 0
var score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
   
}
var arr = []

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    //console.log(quizData[currentQuiz].ans)
    arr.push(quizData[currentQuiz].ans)
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       }else{ 
        quiz.innerHTML = `
       <h2>Quiz is Completed</h2>
       <button onclick="location.href='Reportcard.html'">See Result</button>
       `
    //}
}
    localStorage.setItem("result",JSON.stringify(arr))
})

document.getElementById("skip").addEventListener("click",()=>{
    arr.push(0)
     currentQuiz++
     if(currentQuiz < quizData.length) {
        loadQuiz()
    } 
    if(currentQuiz == 10){
        quiz.innerHTML = `
        <h2>Quiz is Completed</h2>
        <button onclick="location.href='Reportcard.html'">See Result</button>
        `
    }
    localStorage.setItem("result",JSON.stringify(arr))
})



