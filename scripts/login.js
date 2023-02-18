import navbar from "../component/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
var data = JSON.parse(localStorage.getItem("user"));


document.querySelector("form").addEventListener("submit",Loginfun);

function Loginfun(){
  event.preventDefault()
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username,password)
}