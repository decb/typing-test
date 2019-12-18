import React from "react";

import SelectData from "./SelectData";
import Words from "./Words";

function App() {
  const [data, setData] = React.useState(undefined);
  return (
    <div className="App">
      <SelectData setData={setData} />
      {(data !== undefined && <Words data={data} />)}
    </div>
  );
}

export default App;
