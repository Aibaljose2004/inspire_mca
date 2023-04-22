const register =document.getElementById("register");
const btn = document.getElementById("btn")
const clue = document.getElementById("clue");
clue.style.display = "none";
btn.onclick = function(){
    register.style.display = "none";
    clue.style.display = "flex";
}
