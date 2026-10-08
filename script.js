let score = 0;
let attacks = [];

const scoreDisplay = document.getElementById("score");
const title = document.getElementById("title");
const attackButton = document.getElementById("attackButton");
const resetButton = document.getElementById("resetButton");
const playerNameInput = document.getElementById("playerName");
const attackValueInput = document.getElementById("attackValue");
const message = document.getElementById("message");
const attackHistory = document.getElementById("attackHistory");


function getAttackValue() {
    const attackValue = Number(attackValueInput.value);

    if(attackValue < 1 || attackValue > 10 || Number.isNaN(attackValue)) {
        message.innerText = "Attack value must be between 1 and 10";
        return null;
    }

    return attackValue;
}

function calculateDamage(baseDamage, isCritical) {
    if (isCritical) {
        return baseDamage * 2;
    }

    return baseDamage;
}

function displayAttackHistory() {
    attackHistory.innerHTML = "";

    for (let i = 0; i < attacks.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerText = "Attack " + (i + 1) + ": " + attacks[i] + " damage";
        attackHistory.appendChild(listItem);
    }
}

function performAttack() {
    const attackValue = getAttackValue();

    if (attackValue === null) {
        return;
    }

    const isCritical = attackValue === 10;
    const damage = calculateDamage(attackValue, isCritical);

    score += damage;
    scoreDisplay.innerText = score;

    attacks.push(damage);
    displayAttackHistory();

    if (isCritical) {
        message.innerText = "Critical hit! You dealt " + damage + " damage.";
    } else {
        message.innerText = "You dealt " + damage + " damage.";
    }

    if (score >= 20) {
        title.innerText = "YOU WIN!";
        attackButton.disabled = true;
    }
}

function resetGame() {
    score = 0;
    attacks = [];

    scoreDisplay.innerText = score;
    title.innerText = "Click Attack Game";
    message.innerText = "";
    playerNameInput.value = "";
    attackValueInput.value = "";
    attackHistory.innerHTML = "";

    attackButton.disabled = false;
}

// TODO: connect both functions to buttons
attackButton.addEventListener("click", performAttack);
resetButton.addEventListener("click", resetGame);
