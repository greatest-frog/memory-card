import Score from "../Score/Score";
import "./style.css";

const Header = ({ score, bestScore }) => {
  return (
    <header>
      <h1>Wakfu Memory Card</h1>
      <Score score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
