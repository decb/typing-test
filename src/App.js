import React from "react";
import { Alert, Layout } from "antd";

import SelectData from "./SelectData";
import Game from "./Game";
import Header from "./Header";
import Introduction from "./Introduction";

const { Content } = Layout;

function App() {
  const [data, setData] = React.useState(undefined);
  return (
    <div
      style={{
        maxWidth: "700px",
        width: "95%",
        margin: "0 auto",
        padding: "1.2rem 8px",
        borderRadius: "8px"
      }}
    >
      <Header />
      <Content>
        <Introduction />
        <SelectData setData={setData} />
        {data !== undefined ? (
          <Game data={data} />
        ) : (
          <Alert
            message="Select a text source above"
            type="info"
            style={{ marginTop: "0.7rem" }}
            showIcon
          />
        )}
      </Content>
    </div>
  );
}

export default App;
