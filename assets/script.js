function login(){

const user = document.getElementById("user").value;
const pass = document.getElementById("pass").value;

if(user === "Stefianos" && pass === "Stef3123"){
    
localStorage.setItem("login","true");
window.location.href="menu.html";

}else{

document.getElementById("error").innerText="Datos incorrectos";

}

}

if(window.location.pathname.includes("menu.html")){

if(localStorage.getItem("login") !== "true"){

window.location.href="index.html";

}

}
