
let firstPlayerName = ""
let secondPlayerName = ""
let firstPlayerScore = 0
let secondPlayerScore = 0
let totalScore = 0

function firstClick(event) {
    event.preventDefault();
    const data = document.querySelectorAll("input");
    firstPlayerName = data[0].value;
    secondPlayerName = data[1].value;
    totalScore = parseInt(data[2].value);

    document.getElementById("form-container").style.display = "none";
    document.getElementById("board-container").style.display = "flex";

    document.getElementById("player1").getElementsByClassName("heading")[0].innerHTML = firstPlayerName
    document.getElementById("player2").getElementsByClassName("heading")[0].innerHTML = secondPlayerName
}

function rollDice(playerIndex) {
    const randomNumber = getRandomNumber();
    const playerNodes = document.getElementById(`player${playerIndex}`);
    const diceImage = playerNodes.querySelector(".dice-image img");
    diceImage.setAttribute("src", `dice${randomNumber}.png`);

    switch (playerIndex) {
        case 1:
            firstPlayerScore += randomNumber;
            playerNodes.querySelector(".score").innerHTML = firstPlayerScore;
            playerNodes.querySelector("input").setAttribute("disabled", true);
            document.getElementById("player2-button").querySelector("input").removeAttribute("disabled");
            break;
        case 2:
            secondPlayerScore += randomNumber;
            playerNodes.querySelector(".score").innerHTML = secondPlayerScore;
            playerNodes.querySelector("input").setAttribute("disabled", true);
            document.getElementById("player1-button").querySelector("input").removeAttribute("disabled");
            break;
        default:
            break;
    }

    checkIfWinnerExists();
}


function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
}

function checkIfWinnerExists() {
    if (firstPlayerScore >= totalScore) {
        document.getElementById("player1").innerHTML += `<div class="winner"></div>`
        document.getElementById("player2").getElementsByTagName("input")[0].setAttribute("disabled", true)
    }

    if (secondPlayerScore >= totalScore) {
        document.getElementById("player2").innerHTML += `<div class="winner"></div>`
        document.getElementById("player1").getElementsByTagName("input")[0].setAttribute("disabled", true)
    }
}