let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceID = choice.getAttribute("id");
        console.log("choice was clicked:", choiceID);
    });
});