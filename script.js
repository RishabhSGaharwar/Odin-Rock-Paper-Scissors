console.log("Hello");

let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";
let result = "";
let gameover = "";

const userchoice = document.querySelector('.userchoice');
const compchoice = document.querySelector('.computerchoice');
const verdict = document.querySelector('.verdict');
const userscore = document.querySelector('.scores > .user');
const compscore = document.querySelector('.scores > .computer');
const retry = document.querySelector('.retry');
const image = document.querySelectorAll('img');

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice==0){
        computerSelection = "rock";
    }    
    else if(choice==1){
        computerSelection = "paper";
    }
    else{
        computerSelection = "scissors";
    }
}

function round(playerSelection, computerSelection){
    userchoice.textContent = `You chose ${playerSelection}`;
    compchoice.textContent = `Computer chose ${computerSelection}`;
    if(playerSelection == computerSelection){
        result = "It\'s a draw!";
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            result = "You Lose!";
            computerScore++;
        }
        else{
            result = "You Win!";
            playerScore++;
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            result = "You Lose!";
            computerScore++;
        }
        else{
            result = "You Win!";
            playerScore++;
        }
    }
    else{
        if(computerSelection == "rock"){
            result = "You Lose!";
            computerScore++;

        }
        else{
            result = "You Win!";
            playerScore++;
        }
    }
    verdict.textContent = result;
    userscore.textContent = `Your score : ${playerScore}`;
    compscore.textContent = `Computer score : ${computerScore}`
    if(playerScore==5){
        gameover = "You beat the computer!";
        verdict.textContent = gameover;
    }
    if(computerScore==5){
        gameover = "You lost to the computer! Play Again?";
        verdict.textContent = gameover;
    }
    if(gameover){
        image.forEach(element => {
            element.style.opacity = 0.5;
        });
        retry.style.opacity = 1;
    }
}

const choices = document.querySelectorAll('[data-selection]')
console.log(choices);

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        playerSelection = choice.dataset.selection;
        getComputerChoice();
        console.log(playerSelection, computerSelection);
        if(!gameover){
            round(playerSelection, computerSelection);
        }
    })
})


retry.addEventListener('click', e => {
    playerScore = 0;
    computerScore = 0;
    userchoice.textContent = `Welcome to Rock-Paper-Scissors!`;
    compchoice.textContent = `First to score 5 points Wins!`;
    verdict.textContent = ``;
    userscore.textContent = `Your score : ${playerScore}`;
    compscore.textContent = `Computer score : ${computerScore}`    
    gameover = "";
    image.forEach(element => {
        element.style.opacity = 1;
    });
    retry.style.opacity = 0;
})