//Listener del boton play
function startGame() {
    loadGame();
    resetScore();
    createRandomOperation();
    startTimer();
}

var playButton = document.getElementById("play");

playButton.addEventListener("click", startGame);

//Listener del input para respuestas
function sendAnswer(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        if(answerIsCorrect())
            addCorrectAnswer();
        else
            addWrongAnswer();
        
        createRandomOperation();
        document.getElementById('answer').value = "";
    }
}