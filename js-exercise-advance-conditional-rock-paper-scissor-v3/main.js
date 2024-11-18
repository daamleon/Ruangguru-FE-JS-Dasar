function rockPaperScissor(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  }

  if (
    (player1 === "rock" && player2 === "scissor") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissor" && player2 === "paper")
  ) {
    return "Player 1 Won!";
  }

  return "Player 2 Won!";
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
