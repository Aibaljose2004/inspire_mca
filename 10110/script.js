const btn = document.getElementById("btn");
const box = document.getElementById("box");
const value = document.getElementById("value");
const clue = document.getElementById("clue");




function nospaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, '');
    }
};

 clue.style.display = "none";
const text =value.toLowerCase();
btn.addEventListener("click", function() {
    
    if (text == "dennisritchie") {
         box.style.display = "none";
        clue.style.display = "block";
    } else{
        alert("Wrong Answer")
    };
});
                    
