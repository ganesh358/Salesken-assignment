
 import navbar from "../component/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()

document.querySelector("form").addEventListener("submit",Signup);
var arr = JSON.parse(localStorage.getItem("user")) || []
function Signup(e){
    e.preventDefault()

    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;

    var obj = {
        username,
        email,
        password
    }
    
    arr.push(obj);
    if(password === password2){
        localStorage.setItem("user",JSON.stringify(arr))
        window.location.reload();
    
        alert("Sign Up Successfull")
       
          window.location.href = "Login.html"

    }else{
        alert("Uh Oh! Your Password and confirm password don't match!")
    }

}
document.getElementById("show").addEventListener("change",myFunction)

function myFunction() {
    var x = document.getElementById("password")
    let z =document.getElementById("password2")
    if (x.type === "password") {
      x.type = "text";
      z.type = "text";
    } else {
      x.type = "password";
      z.type = "password";
    }
  }