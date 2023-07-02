const messageElem = document.getElementById("message-el");
const cardElem = document.getElementById("card-el");
const sumElem = document.getElementById("sum-el");
const playerElem = document.getElementById("player-el");

let cards = []; // an array that stores all drawn cards
let sum = 0; // sum of all cards values
let playerOn = false; // whether the player is still in the game
let hasBlackJack = false; // whether the player has achieved a Blackjack
let message = ""; //string that holds the message to be displayed
let player = {
  name: "Bishal",
  count: 150,
}; // player object, with properties for name and  countpageRef()

// to generate random card value
const generateRandom = () => {
  // to generate the random value between two specified values 1 and 13 (inclusive)
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  // returns 11 if the value is 1 (representing an Ace),
  // 10 if the value is greater than 10 (representing face cards), or the value itself.
  return randomNumber === 1 ? 11 : randomNumber > 10 ? 10 : randomNumber;
};

const startGame = () => {
  playerOn = true;
  cards = [generateRandom(), generateRandom()];
  console.log(cards);
  // sum of two cards
  sum = cards[0] + cards[1];
  console.log(sum);
  // no black jack
  hasBlackJack = false;
  // render game
  renderGame();
};

const renderGame = () => {
  if (sum <= 20) {
    message = "Do you want to draw the new game?";
    player.count -= 25;
    if (player.count <= 0) {
      message = "Oh no! You're out of the game!" + " ";
      message += "Try again with a new player.";
      playerOn = false;
      hasBlackJack = false;
    }
  } else if (sum === 21) {
    message = "Congratulations! You've the black jack 👏";
    hasBlackJack = true;
    player.count += 50;
  } else {
    message = "Oh no! You're out of the game!";
  }
  sumElem.textContent = "Sum: " + sum;

  // cardElem.textContent = "Cards: " + cards.join(" ");
  cardElem.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardElem.textContent += cards[i] + " ";
  }

  console.log(message);
  messageElem.textContent = message;

  playerElem.textContent = player.name + " " + player.count;
};

const newCard = () => {
  if (playerOn && hasBlackJack === false) {
    let card = generateRandom();
    cards.push(card);
    sum += card;
    player.count -= 5;
    renderGame();
  }
};
