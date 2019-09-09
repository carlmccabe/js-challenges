// Write a method that will take an array player scores for a series of games
// and return the name of the player with the highest total score.
// Test your solution:
// npm test
function total(arr) {
  // calculates the total of the array of scores that is passed in.
  let totalScore = 0;
  for (let num of arr) {
    totalScore += num;
  }
  return totalScore;
}
function findWinner(players) {
  let winner = players[0];
  for (let ind = 1; ind < players.length; ind++) {
    if (total(players[ind].scores) > total(winner.scores)) {
      winner = players[ind];
    }
  }
  return winner.name;
}

module.exports = {
  findWinner
};
