let playGame = document.querySelector("#playGame");
let mainDiv = document.querySelector(".mainDiv");
let Quit = document.querySelector("#Quit");
let link = document.querySelector("#link");


let selection = document.querySelector("#selection");
let userChoise = document.querySelector("#userChoise");
let computerChoise = document.querySelector("#computerChoise");
let announcement = document.querySelector("#announcement");

link.addEventListener("click", () => {
    playGame.style.display = "none";
    mainDiv.style.display = "block";
    Quit.style.display = "block";

})


submitBtn.addEventListener("click", () => {
    let min = 1;
    max = 3;
    let computer = Math.floor(Math.random() * (max - min + 1)) + min;
    if (computer == 1) {
        computer = "stone";
    } else if (computer == 2) {
        computer = "paper";
    } else if (computer == 3) {
        computer = "scissor";
    }

    if (selection.value === "stone" && computer === "stone" ||
        selection.value === "paper" && computer === "paper" ||
        selection.value === "scissor" && computer === "scissor"
    ){
        userChoise.textContent = `your choise :- ${selection.value}`;
        computerChoise.textContent = `Computer Choise :- ${computer}`;
        announcement.textContent = `Match is Draw`;
        selection.value = "";
    }

    if (selection.value === "stone" && computer === "scissor" ||
        selection.value === "paper" && computer === "stone" ||
        selection.value === "scissor" && computer === "paper"
    ) {
        userChoise.textContent = `your choise :- ${selection.value}`;
        computerChoise.textContent = `Computer Choise :- ${computer}`;
        announcement.textContent = `Yor win`;
        selection.value = "";
    }
    else if (selection.value === "scissor" && computer === "stone" ||
        selection.value === "stone" && computer === "paper" ||
        selection.value === "paper" && computer === "scissor"
    ) {
        userChoise.textContent = `your choise :- ${selection.value}`;
        computerChoise.textContent = `Computer Choise :- ${computer}`;
        announcement.textContent = `Computer win`;
        selection.value = "";
    }


    Quit.addEventListener("click", () => {
        playGame.style.display = "block";
        mainDiv.style.display = "none";
        Quit.style.display = "none";

    })





})