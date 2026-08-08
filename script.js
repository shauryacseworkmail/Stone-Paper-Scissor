let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const playgame = (userChoice) => {
    console.log("choice was clicked:", userChoice);
    const computerChoice = getComputerChoice();
    console.log("computer choice:", computerChoice);

    if(userChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else{
        if((userChoice === "stone" && computerChoice === "scissors") ||
           (userChoice === "paper" && computerChoice === "stone") ||
           (userChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!");
            
        } else {
            console.log("Computer wins!");
            
        }
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});