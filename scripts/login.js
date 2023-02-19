import navbar from "../component/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()
var data = JSON.parse(localStorage.getItem("user"));

var ansdata = JSON.parse(localStorage.getItem("result"))


document.querySelector("form").addEventListener("submit",Loginfun);

function Loginfun(){
  event.preventDefault()
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

     let count = 0;
    for(var i=0;i<data.length;i++){
        let arr = []
        if(data[i].username === username && data[i].password === password){
            count++;
            arr.push(username,password)
            localStorage.setItem("userdetails",arr)
            
        }
    }
    let arr1 = []
      
    if(count === 1){
        alert("Login successful");
        window.location.href = "/index.html"
    }else{
        alert("Invalid credintials")
    }
   

}