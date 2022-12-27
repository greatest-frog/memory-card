import "./style.css";

const Score = ({ score, bestScore }) => {
  return (
    <div className="scores">
      <div className="score">Score: {score}</div>
      <div className="best-score">Best score: {bestScore}</div>
    </div>
  );
};

export default Score;
