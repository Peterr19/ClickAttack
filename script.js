let score = 0;

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");

// TODO: create addPoint()
function addPoint() {
    score++;
    scoreDisplay.innerText = score;

    if (score >=20){
        title.innerText= "YOU WIN";
    }
}
// TODO: create resetGame()
function resetGame(){
    score=0;
    scoreDisplay.innerText = score;
    title.innerText = "Click Attack";
}
// TODO: connect both functions to buttons
attackButton.addEventListener("click", addPoint);
resetButton.addEventListener("click", resetGame);
