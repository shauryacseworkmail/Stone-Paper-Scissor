let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
    
    });
});