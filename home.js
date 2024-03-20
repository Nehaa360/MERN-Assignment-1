let num = 0;
function inputDisplay() {
    num = parseInt(document.getElementById("number").value);
    display.innerHTML = "<h1>" + num + "</h1>";
}

function updateDisplay() {
    display.innerHTML = "<h1>" + num + "</h1>";
}

function plus1() {
    inputDisplay()
    num = num + 1;
    updateDisplay();
}


function minus1() {
    inputDisplay()
    num = num - 1;
    updateDisplay();
}

function plus10() {
    inputDisplay()
    num = num + 10;
    updateDisplay();
}

function minus10() {
    inputDisplay()
    num = num - 10;
    updateDisplay();
}
