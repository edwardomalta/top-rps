/* 
    Paso uno: Describir el problema.
    Crear una funcion llamada getComputerChoice, 
    retornando aleatoriamente "Rcok", "Paper", "Scissors"

    Paso dos: Crear el pseudocodigo
    crear una variable que almacene la respuesta
    Tomar un numero aleatorio entre 0 y 2 (tres opciones)
    asignar a respuesta r. si se elije 0, retornar p. si se elije 1, retornar s. si se elije 2;
 */


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function getComputerChoice() {
        let answer;
        const choice = Math.floor(Math.random() * 3);
    
        if (choice === 0 ) answer = "rock";
        else if (choice === 1) answer = "paper";
        else if (choice === 2) answer = "scissors";
        
        return answer;
    }
    
    function getHumanChoice() {
        let answer = prompt("rock, paper or scissors?");
        return answer;
    }
    
    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);
        if (humanChoice == "rock") {
            if (computerChoice == "rock") return "Draw!";
            else if (computerChoice == "paper") {
                computerScore++;
                return "Computer wins!";
            } else if (computerChoice == "scissors") {
                humanScore++;
                return "Human wins!"
            }
        }
        if (humanChoice == "paper") {
            if (computerChoice == "paper") return "Draw!";
            else if (computerChoice == "scissors") {
                computerScore++;
                return "Computer wins!";
            } else if (computerChoice == "rock") {
                humanScore++;
                return "Human wins!"
            }
        }
        if (humanChoice == "scissors") {
            if (computerChoice == "scissors") return "Draw!";
            else if (computerChoice == "rock") {
                computerScore++;
                return "Computer wins!";
            } else if (computerChoice == "paper") {
                humanScore++;
                return "Human wins!"
            }
        }
        
    }
    
    function score() {
        // Imprimimos el score:
        alert(`Score Human ${humanScore} - Computer ${computerScore}`);
        console.log(`Score Human ${humanScore} - Computer ${computerScore}`);

    }

    // Ahora comparamos resultados

    if (humanScore > computerScore) {
        console.log('Congrats! you have won this match!');
    } else {
        console.log('YOU LOSE the match!');
    }
}
