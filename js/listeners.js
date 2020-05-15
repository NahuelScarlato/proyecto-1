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

//Listeners de los boton de tema 1
function selectTheme1() {
    if(theme!=1) {
        document.getElementById("theme-file").setAttribute("href","css/style1.css");
        theme2Button.innerHTML = "Theme 2 (You have been warned)";
        theme = 1;
    }
}

theme1Button = document.getElementById('theme1-button');
theme1Button.addEventListener('click', selectTheme1);

//Listeners de los boton de tema 2
function selectTheme2() {
    if(theme!=2) {
        document.getElementById("theme-file").setAttribute("href","css/style2.css");
        theme2Button.innerHTML = "Theme 2 (Warned you...)";
        theme = 2;
    }
}

theme2Button = document.getElementById('theme2-button');
theme2Button.addEventListener('click', selectTheme2);

//Restringe la escritura de las respuestas a solo floats negativos
$('#answer').keypress(function(event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
        (event.which != 45 || $(this).val().indexOf('-') != -1) &&
        (event.which < 48 || event.which > 57))
        event.preventDefault();
  
    //Este evento elimina los casos en que el punto (.) acaba en la posicion mas a la izq
    $('#answer').keyup(function(e) {
      if ($(this).val().indexOf('.') == 0)
        $(this).val($(this).val().substring(1));
    });

    //Este evento elimina los casos en que el menos (-) acaba en otra posicion que no sea la incial
    $('#answer').keyup(function(e) {
        if ($(this).val().indexOf('-') != 0 && 
            $(this).val().indexOf('-') != -1)
          $(this).val($(this).val().substring(1));
      });
});