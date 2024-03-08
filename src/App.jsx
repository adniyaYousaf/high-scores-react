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
    // Toggle order
    setOrder(order === "Asc" ? "Desc" : "Asc");
  }
  allCountryScores.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

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
