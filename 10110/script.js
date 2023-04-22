const btn = document.getElementById("btn");
const box = document.getElementById("box");
const value = document.getElementById("value");
const clue = document.getElementById("clue");
clue.style.display = "none";






btn.onclick = function () {
    console.log(value.value)
    if (value.value == "dennisritchie") {
        box.style.display = "none";
        clue.style.display = "block";
    }


}
