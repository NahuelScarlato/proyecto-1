//Reemplaza el boton de jugar con el panel del juego
function loadGame() {
    var playButton = document.getElementById('play');
    var gamePanel = document.createElement('div');
    gamePanel.setAttribute('id', 'game-panel');
    gamePanel.setAttribute('class','d-inline-flex')
    gamePanel.innerHTML = `
        <span id='timer' class='m-3'>TIMER</span>
        <div id='operations-panel' class='m-3'>
          <span id='1st-operand'>1</span>
          <span id='operator'>+</span>
          <span id='2nd-operand'>1</span>
          <span id='equal'>=</span>
          <input id='answer' placeholder=' Answer here...'></input>
        </div>
        <table>
          <tr>
            <th class="text-muted pr-2" scope="row">Correct</th>
            <td id='correct-answers'>CorrectValue</td>
          </tr>
          <tr>
            <th class="text-muted pr-2" scope="row">Wrong</th>
            <td id='wrong-answers'>WrongValue</td>
          </tr>
        </table>
    `;
    playButton.replaceWith(gamePanel);

    answerInput = document.getElementById('answer');
    answerInput.addEventListener("keyup", sendAnswer);
}

