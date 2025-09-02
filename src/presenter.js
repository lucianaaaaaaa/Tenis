import TennisScorer from "./tennisScorer";

class Presenter {
  constructor() {
    this.scorer = new TennisScorer();
    this.scoreDisplay = document.getElementById("scoreDisplay");
    this.updateScore();
  }

  player1Scores() {
    this.scorer.player1Scores();
    this.updateScore();
  }

  player2Scores() {
    this.scorer.player2Scores();
    this.updateScore();
  }

  updateScore() {
    this.scoreDisplay.textContent = `Score: ${this.scorer.showScore()}`;
  }
}

const presenter = new Presenter();

document.getElementById("player1Button").addEventListener("click", () => {
  presenter.player1Scores();
});

document.getElementById("player2Button").addEventListener("click", () => {
  presenter.player2Scores();
});

export default Presenter;