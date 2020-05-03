//Puntaje
var correctAnswers;
var wrongAnswers;

//Operandos soportados
const operands = ['+', '-', '*', '/']

//Genera un numero de forma aleatoria dentro del rango. El rango es de la siguiente forma [min,max)
function rngInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Selecciona un operando de forma aleatoria
function randomOperator() {
    return operands[rngInRange(0,4)]
}

//Limpiar el puntaje
function resetScore() {
    correctAnswers = 0;
    wrongAnswers = 0;

    correctAnswersElement = document.getElementById('correct-answers');
    wrongAnswersElement = document.getElementById('wrong-answers');

    correctAnswersElement.innerHTML = correctAnswers;
    wrongAnswersElement.innerHTML = wrongAnswers;
}

//Actualiza las respuestas correctas
function addCorrectAnswer() {
    document.getElementById('correct-answers').innerHTML = ++correctAnswers;
}

//Actualiza las respuestas equivocadas
function addWrongAnswer() {
    document.getElementById('wrong-answers').innerHTML = ++wrongAnswers;
}

//Actualiza el puntaje
function updateScores(answer) {
    if(answer)
        addCorrectAnswer();
    else
        addWrongAnswer();
}

//Evalua la respuesta
function answerIsCorrect(operation, solution) {
    correctAnswer = eval(operation);
    
    answerValueRounded = parseFloat(solution).toFixed(1);
    correctAnswerRounded = parseFloat(correctAnswer).toFixed(1);

    updateSolution(correctAnswerRounded);

    return correctAnswerRounded == answerValueRounded;
}

//Timer
var timer;

function startTimer() {
    timerSec = 60;
    timerHundSec = 0;
    timerDisplay = document.getElementById('timer');

    timer = setInterval(
        function() {
            timerDisplay.innerHTML = timerSec+'.'+timerHundSec;

            if(timerHundSec==0) {
                if(timerSec==0) {
                    clearInterval(timer);
                    hideGame();
                    showButtonPanel();
                }
                else
                    timerSec--;
                timerHundSec=9;
            }
            else
                timerHundSec--;
        }
        ,100);
}
