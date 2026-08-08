let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const getComputerChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const playgame = (userChoice) => {

    const computerChoice = getComputerChoice();

    if(userChoice === computerChoice) {
        msg.textContent = "It's a tie!";
        msg.style.backgroundColor = "blue";
    }
    else{
        if((userChoice === "stone" && computerChoice === "scissors") ||
           (userChoice === "paper" && computerChoice === "stone") ||
           (userChoice === "scissors" && computerChoice === "paper")) {
            msg.textContent = `You win! Your ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScoreDisplay.innerText = userScore;

        } else {
            msg.textContent = `Computer wins! The ${computerChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
        }
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});