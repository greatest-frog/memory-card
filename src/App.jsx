import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import { useState } from "react";
import heroes from "./mock/heroes";

const shuffled = (cards) => {
  return cards
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    window.localStorage && window.localStorage.getItem("bestScore") !== null
      ? localStorage.getItem("bestScore")
      : 0
  );
  const [cards, setCards] = useState(
    shuffled(heroes.map((hero) => JSON.parse(JSON.stringify(hero))))
  );

  const endGame = () => {
    if (score > bestScore) {
      setBestScore(score);
      if (window.localStorage) {
        window.localStorage.setItem("bestScore", score);
      }
    }
    const newHeroes = heroes.map((hero) => JSON.parse(JSON.stringify(hero)));
    setCards(shuffled(newHeroes));
    setScore(0);
  };
  const addPoint = (ind) => {
    const card = cards[ind];
    card.points = 1;
    setScore(score + 1);
    setCards(shuffled(cards));
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Game cards={cards} endGame={endGame} addPoint={addPoint} />
    </div>
  );
}

export default App;
