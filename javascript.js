let button1 = document.getElementById('rockButton');
let button2 = document.getElementById('paperButton');
let button3 = document.getElementById('scissorsButton');

let computerChoice = document.getElementById('computerChoice');
let playerChoice = document.getElementById('playerChoice');

var playerchoice;

function rockChosen() {
    var playerchoice = "Rock";

    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    let value = generateRandomInteger(3);
    
    var computerchoice;
    
    if (value == 1){
        var computerchoice = "Rock";
    }
    else if (value == 2){
        var computerchoice = "Paper";
    
    }
    else if (value == 3){
        var computerchoice = "Scissors";
    }

    computerChoice.innerHTML = computerchoice;
    playerChoice.innerHTML = playerchoice;
}

button1.addEventListener('click', rockChosen);

function paperChosen() {
    var playerchoice = "Paper";

    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    let value = generateRandomInteger(3);
    
    var computerchoice;
    
    if (value == 1){
        var computerchoice = "Rock";
    }
    else if (value == 2){
        var computerchoice = "Paper";
    
    }
    else if (value == 3){
        var computerchoice = "Scissors";
    }

    computerChoice.innerHTML = computerchoice;
    playerChoice.innerHTML = playerchoice;
}

button2.addEventListener('click', paperChosen);

function scissorsChosen() {
    var playerchoice = "Scissors";

    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    let value = generateRandomInteger(3);
    
    var computerchoice;
    
    if (value == 1){
        var computerchoice = "Rock";
    }
    else if (value == 2){
        var computerchoice = "Paper";
    
    }
    else if (value == 3){
        var computerchoice = "Scissors";
    }    

    computerChoice.innerHTML = computerchoice;
    playerChoice.innerHTML = playerchoice;
}

button3.addEventListener("click", scissorsChosen);


