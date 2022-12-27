import "./style.css";

const Card = ({ card, index, process }) => {
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      process(card, index);
    }
  };
  return (
    <div
      className="card"
      onClick={(e) => process(card, index)}
      tabIndex={index + 1}
      onKeyDown={(e) => handleEnter(e)}
    >
      <h3>{card.name}</h3>
      <img src={card.src} alt={card.name} />
    </div>
  );
};
export default Card;
