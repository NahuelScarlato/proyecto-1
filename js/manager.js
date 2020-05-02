//Oculta el boton de jugar y muestra el panel del juego
function loadGame() {
    var buttonPanel = document.getElementById('button-panel');
    var gamePanel = document.getElementById('game-panel');
    gamePanel.setAttribute('class','d-inline');
    buttonPanel.setAttribute('class','d-none');
}

//Oculta el input de respuestas
function hideGame() {
    var operationsPanel = document.getElementById('operations-panel');
    operationsPanel.setAttribute('class','d-none');
}