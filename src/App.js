import React from "react";

import SelectData from "./SelectData";
import Game from "./Game";

function App() {
  const [data, setData] = React.useState(undefined);
  return (
    <div className="App">
      <SelectData setData={setData} />
      {(data !== undefined && <Game data={data} />)}
    </div>
  );
}

export default App;
