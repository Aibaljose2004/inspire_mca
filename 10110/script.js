const btn = document.getElementById("btn");
const box = document.getElementById("box");
const values = document.getElementById("value");
const clue = document.getElementById("clue");




function nospaces(t) {
    if (t.value.match(/\s/g)) {
        t.value = t.value.replace(/\s/g, '');
    }
};



btn.addEventListener("click", function() {
    
    if (values.value == "dennisritchie") {
         
         box.style.display = "none";
        clue.style.display = "block";
    } else{
        alert("Wrong Answer")
console.log(values.value);
    };
});
     
