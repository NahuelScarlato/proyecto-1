//Listener del boton play
function startGame() {
    loadGame();
    resetScore();
    createRandomOperation();
    startTimer();
}

playButton = document.getElementById('play');
playButton.addEventListener('click', startGame);

//Listener del input para respuestas
function sendAnswer(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        justSolved = document.getElementById('new-op').innerHTML;
        answerValue = document.getElementById('answer').value;
        
        isCorrect = answerIsCorrect(justSolved, answerValue);
        
        updatePrevious(isCorrect);
        updateScores(isCorrect);

        createRandomOperation();
        document.getElementById('answer').value = "";
    }
}

answerInput = document.getElementById('answer');
answerInput.addEventListener('keyup', sendAnswer);

//Restringe la escritura de las respuestas a solo floats
$('#answer').keypress(function(event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1)
        && (event.which < 48 || event.which > 57)
        || (event.which == 46 && $(this).caret().start == 0))
        event.preventDefault();
  
    //Este evento elimina los casos en que el punto (.) acaba en la posicion mas a la izq
    $('#answer').keyup(function(e) {
      if ($(this).val().indexOf('.') == 0) 
        $(this).val($(this).val().substring(1));
    });
});