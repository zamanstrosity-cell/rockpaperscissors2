//Selectors
const gameContainer = document.querySelector(".game-container");

const yourChoices = {
    rock: document.querySelector("[rock]"),
    paper: document.querySelector("[paper]"),
    scissors: document.querySelector("[scissors]")
}
const images = {
    rock: document.createElement('img'),
    paper: document.createElement('img'),
    scissors: document.createElement('img'),
    rock1: document.createElement('img'),
    paper1: document.createElement('img'),
    scissors1: document.createElement('img'),
    set: function(){
        this.rock.src = "/images/rock.svg";
        this.paper.src = "/images/paper.svg";
        this.scissors.src = "/images/scissors.svg";
        this.rock1.src = "/images/rock.svg";
        this.paper1.src = "/images/paper.svg";
        this.scissors1.src = "/images/scissors.svg";
    }
}

const scores = {
    yourScore: document.querySelector("[your-score]"),
    comScore: document.querySelector("[computer-score]")
}
const gameConsole = document.querySelector(".game-winner");
const winner = document.querySelector("#game-picks");
const replay = document.querySelector("#replay");
const resetButton = document.querySelector("#reset");
const result = document.querySelector("#final-result");
const gameOver = document.querySelector(".game-over");

//variables
let player = 0;
let computer = 0;
let yourPick = "";
let comPick = "";
//functions
images.set();


function computerPick() {
    let picks = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    comPick = picks[random];
    return comPick;
}


function game(choice) {
    computerPick();
    if(choice === "rock"){
        winner.appendChild(images.rock);
    }
    if(choice === "paper"){
        winner.appendChild(images.paper);
    }
    if(choice === "scissors"){
        winner.appendChild(images.scissors);
    }
    if(comPick === "rock"){
        winner.appendChild(images.rock1);
    }
    if(comPick === "paper"){
        winner.appendChild(images.paper1);
    }
    if(comPick === "scissors"){
        winner.appendChild(images.scissors1);
    }
}

function scoreCounter() {
    if(yourPick === "rock" && comPick === "paper" ||
    yourPick === "paper" && comPick === "scissors" ||
    yourPick === "scissors" && comPick === "rock"){
        computer++;
        scores.comScore.innerHTML = computer;
        scores.yourScore.innerHTML = player;
    }
    else if(comPick === "rock" && yourPick === "paper" ||
    comPick === "paper" && yourPick === "scissors" ||
    comPick === "scissors" && yourPick === "rock"){
        player++;
        scores.comScore.innerHTML = computer;
        scores.yourScore.innerHTML = player;
    }
    if(player === 5){
        result.innerHTML = "YOU WON THE GAME";
        gameOver.style.visibility = "visible";
    };
    if(computer === 5) {
        result.innerHTML = "YOU LOST TO THE COMPUTER";
        gameOver.style.visibility = "visible";
    }
}

function clearGame() {
    while(winner.hasChildNodes()){
        winner.removeChild(winner.childNodes[0]);
    };
}

function reset(){
    computer = 0;
    player = 0;
    yourPick = "";
    comPick = "";
}


//event listeners

yourChoices.rock.addEventListener('click', () => {
    yourPick = "rock";
    game(yourPick);
    scoreCounter();
    gameConsole.style.visibility = "visible";
});

yourChoices.paper.addEventListener('click', () => {
    yourPick = "paper";
    game(yourPick);
    scoreCounter();
    gameConsole.style.visibility = "visible";
});

yourChoices.scissors.addEventListener('click', () => {
    yourPick = "scissors"
    game(yourPick);
    scoreCounter();
    gameConsole.style.visibility = "visible";
});

replay.addEventListener("click", () => {
    clearGame();
    gameConsole.style.visibility = "hidden";
});

resetButton.addEventListener('click', () =>{
    reset();
    clearGame();
    scores.comScore.innerHTML = computer;
    scores.yourScore.innerHTML = player;
    gameConsole.style.visibility = "hidden";
    gameOver.style.visibility = "hidden";
});
