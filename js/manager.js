//Oculta el panel de botones y muestra el panel del juego
function loadGame() {
    var buttonPanel = document.getElementById('button-panel');
    buttonPanel.setAttribute('class','d-none');

    var gamePanel = document.getElementById('game-panel');
    gamePanel.setAttribute('class','d-inline');

    var operationPanel = document.getElementById('operation-panel');
    operationPanel.setAttribute('class','col-6');

    var previousPanel = document.getElementById('previous-panel');
    previousPanel.setAttribute('class','col-6 invisible');
}

//Muestra el panel de botones
function showButtonPanel() {
    var buttonPanel = document.getElementById('button-panel');
    buttonPanel.setAttribute('class','d-inline');
    if(document.getElementById('retry-message') == null){
        var retry = document.createElement("span");
        retry.id = 'retry-message';
        retry.setAttribute('class', 'd-block h2');
        retry.innerHTML = "I think you can do better, try again"
        buttonPanel.insertBefore(retry, buttonPanel.firstChild);
    }
}

//Oculta el input de respuestas
function hideGame() {
    var operationPanel = document.getElementById('operation-panel');
    operationPanel.setAttribute('class','d-none');

    var previousPanel = document.getElementById('previous-panel');
    previousPanel.setAttribute('class','d-none');
}

//Hace visible el panel de la operacion previa y solucion
function showPrevious() {
    var previousPanel = document.getElementById('previous-panel');
    if(previousPanel.getAttribute('class').includes('invisible'))
        previousPanel.setAttribute('class','col-6 visible m-1');
}

//Crea una operacion sencilla de forma aleatoria
function createRandomOperation() {
    newOperation = document.getElementById('new-op');
    
    randomBoolean = Math.random() >= 0.5;
    secondNumber = (randomBoolean?1:-1)*rngInRange(1,11);
    secondNumber = (randomBoolean?secondNumber:'('+secondNumber+')');

    newOperation.innerHTML = rngInRange(-50,51)+" "+randomOperator()+" "+secondNumber;
}

//Actualiza la solucion
function updateSolution(solutionValue) {
    showPrevious();

    solution = document.getElementById('true-answer');
    solution.innerHTML = solutionValue;
}

//Actualiza la operacion previa con su respuesta
function updatePrevious(answer) {
    previousSolved = document.getElementById('previous-op');
    justSolved = document.getElementById('new-op').innerHTML;
    justSolvedWrapper = previousSolved.parentElement;
    answerValue = document.getElementById('answer').value;

    previousSolved.innerHTML = justSolved+" = "+answerValue;

    if(answer)
        justSolvedWrapper.setAttribute('class', 'badge badge-success text-wrap');
    else
        justSolvedWrapper.setAttribute('class', 'badge badge-danger text-wrap');
}