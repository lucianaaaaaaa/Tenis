import TennisScorer from "./tennisScorer.js";

describe("TennisScorer", () => {
  //Empieza sin puntos     --> "Love - Love"
  it("game empieza con ambos en cero", () => {
    const scorer = new TennisScorer();
    expect(scorer.showScore()).toEqual("Love - Love");
  });

  it("Jugador 1 marca un punto y el jugador en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("15 - Love");
  });

  it("Jugador 1 marca 2 puntos y jugador 2 en cero", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("30 - Love");
  });
  it("El Jugador 1 marca 3 puntos y jugador 2 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("40 - Love");
  });
  it("El Jugador 1 marca 4 puntos y jugador 2 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    expect(scorer.showScore()).toEqual("Game for Player 1");
  });
  it("El Jugador 2 marca 1 punto y jugador 1 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 15");
  });
  it("El Jugador 2 marca 2 puntos y jugador 1 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 30");
  });
  it("El Jugador 2 marca 3 puntos y jugador 1 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Love - 40");
  });
  it("El Jugador 2 marca 4 puntos y jugador 1 en 0", () => {
    const scorer = new TennisScorer();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("Game for Player 2");
  });
  it("Ambos jugadores marcan 1 punto", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("15 - 15");
  });
  it("Jugador 1 marca 2 puntos y jugador 2 marca 1 punto", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("30 - 15");
});
  it("Ambos jugadores marcan 2 puntos", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("30 - 30");
  });
  it("Jugador 1 marca 3 puntos y jugador 2 marca 2 punto", () => {
    const scorer = new TennisScorer();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player1Scores();
    scorer.player2Scores();
    expect(scorer.showScore()).toEqual("40 - 30");
  });

});