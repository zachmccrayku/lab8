var border = {};
var background = {};

window.onload = () => {
    border = {
        red: document.getElementById("border-red-value"),
        green: document.getElementById("border-green-value"),
        blue: document.getElementById("border-blue-value"),
        width: document.getElementById("border-width-value"),
    }
    background = {
        red: document.getElementById("background-red-value"),
        blue: document.getElementById("background-blue-value"),
        green: document.getElementById("background-green-value"),
    }
}

function Submit()
{
    let transform = document.getElementById("text");
    transform.style.borderColor = `rgb(${border.red.value}, ${border.green.value}, ${border.blue.value})`;
    transform.style.borderWidth = border.width.value;
    transform.style.backgroundColor = `rgb(${background.red.value}, ${background.green.value}, ${background.blue.value})`;
}
