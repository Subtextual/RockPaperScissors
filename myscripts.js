let player = 0;
let comp = 0;
let roundcount = 0;
let result = 2;

var announce = document.getElementById("announce");
console.log(announce);
var pscore = document.getElementById("playerscore");
var cscore = document.getElementById("compscore");

function playRound(playerSelection) {
    computerSelection = Math.floor((Math.random() * 3));
    switch(computerSelection-playerSelection){
        case -1:
        case 2:
            announce.innerText = "you win!";            
            pscore.innerText = `${++player}`;
            roundcount++;
            break;
        case 1:
        case -2:
        announce.innerText = "you lose!";
            cscore.innerText = `${++comp}`;
            roundcount++;
            break;            
        case 0:
            announce.innerText = "draw";
            roundcount++;
            break;
    }
    if(roundcount === 5) {
        End()
    }
}

function End() {
    if(player>comp){
        announce.textContent = `you win! ${player} to ${comp}`;
    } else if (player===comp) {
        announce.textContent = `draw! ${player} all`;
    } else {
        announce.textContent = `you lose! ${comp} to ${player}`;
    }
}