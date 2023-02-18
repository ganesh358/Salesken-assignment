import navbar from "../component/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
var data = JSON.parse(localStorage.getItem("user"));


document.querySelector("form").addEventListener("submit",Loginfun);

function Loginfun(){
  event.preventDefault()
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

     let count = 0;
    for(var i=0;i<data.length;i++){
        if(data[i].username === username && data[i].password === password){
            count++
        }
    }
      
    if(count === 1){
        alert("Login successful");
        window.location.href = "/index.html"
    }else{
        alert("Invalid credintials")
    }
   

}