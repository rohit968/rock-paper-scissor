const player1 = document.getElementById("player1");
const player_input = document.getElementById("players__input");
const game_button = document.getElementById("start__game__button");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const rounds = document.getElementById("rounds");

const player = {
  name: "",
  choice: "",
};

const cpu_player = {
  name: "",
  choice: "",
};

const names = ["Ram", "Akshay", "Rohan", "Giri"];
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
  cpu_player.name = names[Math.floor(Math.random() * names.length)];
  cpu_player.choice = choices[Math.floor(Math.random() * choices.length)];
  console.log(cpu_player);
};

const winner_div = ({ name, choice }) => {
  const div = document.createElement('div');
  div.innerHTML = `<h4>The winner is ${name} and choice was ${choice}`;
  document.body.append(div);
}

const game = (choice) => {
  player_details(choice);
  cpu_player_details();
  winner();
};

function winner() {
  if ((player.choice == 'rock' && cpu_player.choice == 'scissor') || (player.choice == 'scissor' && cpu_player.choice == 'paper') || (player.choice == 'paper' && cpu_player.choice == 'rock')) {
    winner_div(player);
  } else if ((player.choice == 'rock' && cpu_player.choice == 'paper') || (player.choice == 'scissor' && cpu_player.choice == 'rock') || (player.choice == 'paper' && cpu_player.choice == 'scissor')) {
    winner_div(cpu_player);
  } else {
    const div = document.createElement('div');
    div.innerHTML = '<h4>Draw</h4>';
    document.body.append(div);
  }
}
