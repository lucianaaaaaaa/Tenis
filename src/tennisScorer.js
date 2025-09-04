class TennisScorer {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  showScore() {
    if (this.player1Points === 1 && this.player2Points === 0) {
      return "15 - Love";
    } else if (this.player1Points === 2 && this.player2Points === 0) {
      return "30 - Love";
    } else if (this.player1Points === 3 && this.player2Points === 0) {
      return "40 - Love";
    } else if (this.player1Points === 4 && this.player2Points === 0) {
      return "Game for Player 1";
    } else if (this.player2Points === 1 && this.player1Points === 0) {
      return "Love - 15";
    } else if (this.player2Points === 2 && this.player1Points === 0) {
      return "Love - 30";
    } else if (this.player2Points === 3 && this.player1Points === 0) {
      return "Love - 40";
    } else if (this.player2Points === 4 && this.player1Points === 0) {
      return "Game for Player 2";
    } else if (this.player1Points === 1 && this.player2Points === 1) {
      return "15 - 15";
    } else if (this.player1Points === 2 && this.player2Points === 1) {
      return "30 - 15";
    } else if (this.player1Points === 2 && this.player2Points === 2) {
      return "30 - 30";
    } else if (this.player1Points === 3 && this.player2Points === 2) {
      return "40 - 30";
    } else if (this.player1Points === 3 && this.player2Points === 3) {
      return "Deuce";
    } else if (this.player1Points === 4 && this.player2Points === 3) {
      return "Advantage Player 1";
    } else if (this.player1Points === 3 && this.player2Points === 4) {
      return "Advantage Player 2";
    } else if (this.player1Points === 5 && this.player2Points === 3) {
      return "Game for Player 1";
    } else if (this.player2Points === 5 && this.player1Points === 3) {
      return "Game for Player 2";
    } else if (this.player1Points === 0 && this.player2Points === 0) {
      return "Love - Love";
    }
    if (this.player1Points >= 3 && this.player2Points >= 3) {
      const pointDifference = this.player1Points - this.player2Points;

      if (pointDifference === 0) {
        return "Deuce";
      } else if (pointDifference === 1) {
        return "Advantage Player 1";
      } else if (pointDifference === -1) {
        return "Advantage Player 2";
      } else if (pointDifference >= 2) {
        return "Game for Player 1";
      } else if (pointDifference <= -2) {
        return "Game for Player 2";
      }
    }
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }
}

export default TennisScorer;