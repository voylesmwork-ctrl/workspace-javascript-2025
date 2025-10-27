var num1 = Math.floor(Math.random()*200 + 300);
document.getElementById('originalCount').textContent = num1;
var num2 = Math.floor(Math.random()*(num1-1) + 1);
document.getElementById('remove').textContent = num2;
var num3 = Math.floor(Math.random()*(num2-1) + 1);
document.getElementById('retrieve').textContent = num3;

document.getElementById('ans1').textContent = num1 + "-" + (num2+num3);
document.getElementById('ans2').textContent = num1 + "-" + (num2-num3);
document.getElementById('ans3').textContent = num1 + "-" + num2 + "-" + num3;
document.getElementById('ans4').textContent = num1 + "-" + num2 + "+" + num3;

function changeStyle(event) {
    event.preventDefault();
    var classname = this.getAttribute('class');
    if (classname === "answer selected") {
        this.setAttribute('class', "answer");
        this.children[0].chlidren[0].checked = false;
    } else {
        this.setAttribute('class', "answer selected");
        this.children[0].chlidren[0].checked = true;
    }
}
for (var i = 0; i < 4; i++) {
    document.getElementsByClassName('answer')[i].addEventListener('click', changeStyle, false);
}

function checkAnswers() {
    var opt1 = document.getElementById('ans1').checked;
    var opt2 = document.getElementById('ans2').checked;
    var opt3 = document.getElementById('ans3').checked;
    var opt4 = document.getElementById('ans4').checked;
    if (!opt1 && opt2 && !opt3 && opt4) {
        alert("Correct!");
    }
}
document.querySelector('input[value="submit"]').addEventListener('click', checkAnswers);