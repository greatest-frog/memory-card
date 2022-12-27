import "./style.css";
import CardGrid from "../CardGrid/CardGrid";

const Game = ({ endGame, cards, addPoint, shuffle }) => {
  return (
    <div className="game">
      <h2>
        Get points for choosing a card, but don't click on the same card more
        than once!
      </h2>
      <CardGrid
        cards={cards}
        endGame={endGame}
        addPoint={addPoint}
        shuffle={shuffle}
      />
    </div>
  );
};

export default Game;
