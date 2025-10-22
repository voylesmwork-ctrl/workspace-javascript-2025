var num1 = Math.floor(Math.random()*200 + 300);
document.getElementById('originalCount').textContent = num1;
var num2 = Math.floor(Math.random()*(num1-1) + 1);
document.getElementById('remove').textContent = num2;
var num3 = Math.floor(Math.random()*(num2-1) + 1);
document.getElementById('retrieve').textContent = num3;

var result = num1 + "-" + num2 + "+" + num3;
switch (Math.floor(Math.random()*4) + 1) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
}
document.getElementById('ans1').textContent = num1 + "-" + (num2+num3);
document.getElementById('ans2').textContent = num1 + "-" + (num2-num3);
document.getElementById('ans3').textContent = num1 + "-" + num2 + "-" + num3;
document.getElementById('ans4').textContent = num1 + "-" + num2 + "+" + num3;