// get the element 

// element --- property
var num1 = parseInt(document.getElementById('num1').textContent);
var num2 = parseInt(document.getElementById('num2').textContent);


//process
var c = num1 + num2;
var d = num2 - num1;
var e = num1 * num2;
var f = num2 / num1;

//display
document.write(c + " " + d + " " + e + " " + f);