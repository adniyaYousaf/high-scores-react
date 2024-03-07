// import { use } from "chai";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./data/scores.js";
import { useState } from "react";

const App = () => {
  const [order, setOrder] = useState("Asc");

  function handleClick() {
    allCountryScores.forEach((item) => {
      if (order === "Asc") {
        item.scores.sort((a, b) => a.s - b.s);
      } else {
        item.scores.sort((a, b) => b.s - a.s);
      }
    });

    setOrder(order === "Asc" ? "Desc" : "Asc");
  }

  //Sort the country name Alphabetically
  allCountryScores.sort((a, b) => a.name - b.name);

  return (
    <div className="container">
      <button type="button" onClick={handleClick}>
        Sort Score Ascending Order
      </button>
      <h1 className="heading">High Scores</h1>
      {allCountryScores.map(({ name, scores }, index) => (
        <HighScoreTable country={name} scores={scores} key={index} />
      ))}
    </div>
  );
};
export default App;
