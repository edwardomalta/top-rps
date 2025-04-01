/* 
    Paso uno: Describir el problema.
    Crear una funcion llamada getComputerChoice, 
    retornando aleatoriamente "Rcok", "Paper", "Scissors"

    Paso dos: Crear el pseudocodigo
    crear una variable que almacene la respuesta
    Tomar un numero aleatorio entre 0 y 2 (tres opciones)
    asignar a respuesta r. si se elije 0, retornar p. si se elije 1, retornar s. si se elije 2;
 */

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".result");
const scores = document.querySelectorAll(".points");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let winner = playRound(button.id, getComputerChoice());
        const para = document.createElement("p");
        para.textContent = winner;
        results.appendChild(para);
    });
});


let humanScore = 0;
let computerScore = 0;

function updateScores() {
    scores[0].textContent = humanScore;
    scores[1].textContent = computerScore;
    if (humanScore > 4 || computerScore > 4) {
        winner = humanScore < 5 ? "computer" : "human"
        alert(`Winner is: ${winner}`);
    }
}

function playRound(humanChoice, computerChoice) {
    let player1 = document.createElement("p");
    let player2 = document.createElement("p");
    player1.textContent = "Human choice: " + humanChoice
    player2.textContent = "Computer choice: " + computerChoice

    results.appendChild(player1);
    results.appendChild(player2);

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            updateScores();
            return "Draw!";
        } else if (computerChoice == "paper") {
            computerScore++;
            updateScores();
            return "Computer wins!";
        } else if (computerChoice == "scissors") {
            humanScore++;
            updateScores();
            return "Human wins!"
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "paper") return "Draw!";
        else if (computerChoice == "scissors") {
            computerScore++;
            updateScores();
            return "Computer wins!";
        } else if (computerChoice == "rock") {
            humanScore++;
            updateScores();
            return "Human wins!"
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "scissors") return "Draw!";
        else if (computerChoice == "rock") {
            computerScore++;
            updateScores();
            return "Computer wins!";
        } else if (computerChoice == "paper") {
            humanScore++;
            updateScores();
            return "Human wins!"
        }
    }
    
}

function getComputerChoice() {
    let answer;
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0 ) answer = "rock";
    else if (choice === 1) answer = "paper";
    else if (choice === 2) answer = "scissors";
    
    return answer;
}

function playGame(btnChoice) {
    
    
    function score() {
        // Imprimimos el score:
        alert(`Score Human ${humanScore} - Computer ${computerScore}`);
        console.log(`Score Human ${humanScore} - Computer ${computerScore}`);

    }

    playRound(btnChoice, getComputerChoice());
    score();

    // Ahora comparamos resultados

    if (humanScore > 5) {
        console.log('Congrats! you have won this match!');
    } else if (computerScore > 5) {
        console.log('YOU LOSE the match!');
    } else if (!(humanScore < 5) && !(computerScore < 5))console.log('We have a tie!');
}
