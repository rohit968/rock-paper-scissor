const player1 = document.getElementById("player1");
const player_input = document.getElementById("players__input");
const game_button = document.getElementById("start__game__button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const rounds = document.getElementById("rounds");
const result = document.getElementById('result_message');

const player = {
  name: "",
  choice: "",
};

const cpu_player = {
  name: "CPU",
  choice: "",
};

const choices = ["rock", "paper", "scissor"];

rock.addEventListener("click", () => {
  game(rock.value);
});

paper.addEventListener("click", () => {
  game(paper.value);
});

scissor.addEventListener("click", () => {
  game(scissor.value);
});

const player_details = (choice) => {
  player.choice = choice;
  player.name = player1.value;
  console.log(player);
};

const cpu_player_details = () => {
  cpu_player.choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(cpu_player);
};

const winner_div = ({ name, choice }) => {
  result.innerText = `The winner is ${name} and choice was ${choice}`;
}

const game = (choice) => {
  player_details(choice);
  cpu_player_details();
  winner();
};

function winner() {

  if ((player.choice == 'rock' && cpu_player.choice == 'scissor') || (player.choice == 'scissor' && cpu_player.choice == 'paper') || (player.choice == 'paper' && cpu_player.choice == 'rock')) {
    winner_div(player);
    if (result.classList.contains('red') || result.classList.contains('yellow')) {
      result.classList.remove('red')
      result.classList.remove('yellow');
    }
    result.classList.add('green');
  } else if ((player.choice == 'rock' && cpu_player.choice == 'paper') || (player.choice == 'scissor' && cpu_player.choice == 'rock') || (player.choice == 'paper' && cpu_player.choice == 'scissor')) {
    winner_div(cpu_player);
    if (result.classList.contains('green') || result.classList.contains('yellow')) {
      result.classList.remove('green');
      result.classList.remove('yellow');
    }
    result.classList.add('red');
  } else {
    result.innerText = 'Match is draw. Play Again';
    if (result.classList.contains('red') || result.classList.contains('green')) {
      result.classList.remove('red')
      result.classList.remove('green');
    }
    result.classList.add('yellow');

  }
}
