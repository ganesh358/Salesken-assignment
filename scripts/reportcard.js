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


let data = JSON.parse(localStorage.getItem("result"));

 console.log(data)
var report = document.getElementById("report") 
Reportcard()
function Reportcard(){
  let score = 0;
    for(var i=0;i<data.length;i++){
        if(data[i] === quizData[i].ans){
              score++;
              
        }
        
    }
    
   var scoreTotal =  document.getElementById("score")
     scoreTotal.innerHTML = `Your Score ${score}/10`
     scoreTotal.style.color = "green"

    quizData.map((item,index) => {

        const yourans = data[index]
        var div = document.createElement("div");

       

        
        
            var quest = document.createElement("h2");
            quest.textContent = item.question

            
                var anser = document.createElement("p");
                anser.textContent = `Answer: ${item.ans}`
                var your = document.createElement("p");

                your.textContent = `Your answer: ${yourans}`
            
            div.append(quest,anser,your);
           
        
        


        report.append(div)
    
    })


}