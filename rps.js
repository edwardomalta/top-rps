/* 
    Paso uno: Describir el problema.
    Crear una funcion llamada getComputerChoice, 
    retornando aleatoriamente "Rcok", "Paper", "Scissors"

    Paso dos: Crear el pseudocodigo
    crear una variable que almacene la respuesta
    Tomar un numero aleatorio entre 0 y 2 (tres opciones)
    asignar a respuesta r. si se elije 0, retornar p. si se elije 1, retornar s. si se elije 2;
 */

function getComputerChoice() {
    let answer;
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0 ) answer = "rock";
    else if (choice === 1) answer = "paper";
    else if (choice === 2) answer = "scissors";
    
    return answer;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());