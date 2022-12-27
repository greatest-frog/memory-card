import Card from "../Card/Card";
import "./style.css";

const CardGrid = ({ endGame, cards, addPoint }) => {
  const process = (card, ind) => {
    if (card.points === 1) {
      endGame();
      console.log(1, card);
    } else {
      addPoint(ind);
      console.log(card);
    }
  };
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card card={card} index={index} process={process} key={card.ind} />
      ))}
    </div>
  );
};

export default CardGrid;
