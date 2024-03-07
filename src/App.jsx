import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./data/scores.js";

const App = () => (
  <div className="container">
    <h1 className="heading">High Scores</h1>
    {allCountryScores.map(({ name, scores }, index) => (
      <HighScoreTable country={name} scores={scores} key={index} />
    ))}
  </div>
);

//Sort the country name Alphabetically
allCountryScores.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

//Sort the scores in descending
allCountryScores.forEach((item) => {
  item.scores.sort(function (a, b) {
    if (a.s < b.s) {
      return 1;
    }
    if (a.s > b.s) {
      return -1;
    }
    return 0;
  });
});

export default App;
