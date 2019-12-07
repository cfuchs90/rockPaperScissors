function computerPlay() {
  let choices = ["Rock", "Paper", "Sciccors"];
  let randomInt = Math.round(Math.random()* 2);

  return choices[randomInt].toLowerCase();
}

function playerSelection() {
  let choice = prompt("Rock, Paper or Scissors?");
  choice = choice.toLowerCase();


  if(choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return null;
  }
  }


function playGame(playerChoice, computerChoice) {
   if (playerChoice === "rock" && computerChoice === "paper") {
     return "Computer wins";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "Computer wins";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "Computer wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Player wins";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Player wins";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Player wins";
  } else {
    return "draw";
  }
}

function game(n) {
  for(let i = 1; i <= 5; i++) {
    let player = playerSelection();
    let computer = computerPlay();
    console.log(playGame(player, computer));
  }
}

let numGames = +prompt("How many games do you want to play?");

if(isNaN(numGames)) {
  document.write("You must enter number");
} else {
  game(numGames);  
}


