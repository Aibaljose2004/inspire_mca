const btn = document.getElementById("btn");
const box = document.getElementById("box");
const value = document.getElementById("value");
const clue = document.getElementById("clue");
clue.style.display = "none";



function nospaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, '');
    }
}

 
btn.addEventListener('click', function (){
    console.log(value.value)
    if (value.value == "dennisritchie") {
        box.style.display = "none";
        clue.style.display = "block";
    }


}
                     });
