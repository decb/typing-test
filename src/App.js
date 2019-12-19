import React from "react";
import { Alert } from "antd";

import SelectData from "./SelectData";
import Game from "./Game";

function App() {
  const [data, setData] = React.useState(undefined);
  return (
    <div className="App">
      <SelectData setData={setData} />
      {data !== undefined ? (
        <Game data={data} />
      ) : (
        <Alert message="Select a text source above" type="info" showIcon />
      )}
    </div>
  );
}

export default App;
