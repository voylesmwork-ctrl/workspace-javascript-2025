var messageE = document.getElementById('message');

const showKey = (event) => {
    document.getElementById("lastKey").textContent = "You hit " + event.key + ".";
};
const showPosition = (event) => {
    document.getElementById("charactersLeft").textContent = "Mouse position: " + event.pageX + " " + event.pageY + "."
};

messageE.addEventListener('keypress', showKey, false);
document.addEventListener('mousemove', showPosition);