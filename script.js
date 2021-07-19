    let playerScore = 0;
    let computerScore = 0;
    let computerChoice;
    const options = ["rock", "paper", "scissors"]; 
    const scoreDOM = document.querySelector(".scoreContainer");
    const scoreUpdate = document.createElement("p");
    const messageDOM = document.querySelector("#message");
    const messageUpdate = document.createElement("p");
// when a button is selected, event listener of the buttons id is transmitted as the player's choice
//computer randomly chooses an option and a round is played
const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) =>{
            computerChoice = options[Math.floor(Math.random() * options.length)]; 
            playRound(computerChoice, e.target.id);
        });
    });

//plays a round with the input choices - updates DOM with the winner and score            
function playRound(computerChoice, playerChoice){
                if (computerChoice === "rock" & playerChoice === "paper" ||
                    computerChoice === "paper" & playerChoice === "scissors" ||
                    computerChoice === "scissors" & playerChoice === "rock"){
                        playerScore += 1;
                        messageUpdate.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
                    }
                else if (computerChoice === "paper" & playerChoice === "rock" ||
                         computerChoice === "scissors" & playerChoice === "paper" ||
                         computerChoice === "rock" & playerChoice === "scissors"){
                            computerScore += 1;
                            messageUpdate.textContent =`You Lose! ${playerChoice} beats ${computerChoice}`;
                    }
                else {
                    messageUpdate.textContent = "It's a tie!";
                }
                scoreIt();
                appender();
                isWinnerTime(playerScore, computerScore);
            }

//determines if the player or computer won 5 rounds
function isWinnerTime(c, d){
    if (c == 5 || d == 5){
        determineWinner(c, d)
    }
    return;
}

//if 5 rounds are won, determines winner
function determineWinner(a, b){
    if (a < b){
        messageUpdate.textContent = `Sad! You lost! You scored ${a} vs the computer's ${b}!`;
        scoreUpdate.textContent = "";
        }
    else if (a > b){
        messageUpdate.textContent = `You win!!!! You scored ${a} vs the computer's ${b}!`;
        scoreUpdate.textContent = "";
        }
    else{
        messageUpdate.textContent ="How improbable! It's a tie!";
        scoreUpdate.textContent = "";
        }
    
    appender();
    playerScore = 0;
    computerScore = 0;
}

//updates the score in the DOM
function scoreIt(){
    scoreUpdate.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
}
//appends dom elements
function appender(){
    messageDOM.appendChild(messageUpdate);
    scoreDOM.appendChild(scoreUpdate);
}