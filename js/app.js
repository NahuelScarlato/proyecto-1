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

//Crea una operacion sencilla de forma aleatoria
function createRandomOperation() {
    firstOperand = document.getElementById('1st-operand');
    operator = document.getElementById('operator');
    secondOperand = document.getElementById('2nd-operand');

    firstOperand.innerHTML = rngInRange(0,51);
    operator.innerHTML = randomOperator();
    secondOperand.innerHTML = rngInRange(1,11);
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

//Evaluar respuesta
function answerIsCorrect() {
    firstOperandValue = document.getElementById('1st-operand').innerHTML;
    operatorValue = document.getElementById('operator').innerHTML;
    secondOperandValue = document.getElementById('2nd-operand').innerHTML;
    answerValue = document.getElementById('answer').value;
    correctAnswer = eval(firstOperandValue+operatorValue+secondOperandValue);

    answerValueRounded = parseFloat(answerValue).toFixed(1);
    correctAnswerRounded = parseFloat(correctAnswer).toFixed(1);

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
                if(timerSec==0)
                    clearInterval(timer);
                else
                    timerSec--;
                
                timerHundSec=9;
            }
            else {
                timerHundSec--;
            }
        }
        ,100);
}
