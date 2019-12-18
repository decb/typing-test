import React from "react";
import Words from "./Words";
import data from "./markov";

function App() {
  return (
    <div className="App">
      <Words data={data} />
    </div>
  );
}

export default App;
