import React from "react";
import { Alert, Layout } from "antd";

import SelectData from "./SelectData";
import Game from "./Game";
import Header from "./Header";
import Introduction from "./Introduction";
import { appStates } from "./states";

const { Content } = Layout;

function App() {
  const [data, setData] = React.useState(undefined);
  const [appState, setAppState] = React.useState(appStates.NONE_SELECTED);
  const setFetchState = newState => {
    if (appState === appStates.NONE_SELECTED) {
      setAppState(newState);
    }
  };

  let appStateView = undefined;
  switch (appState) {
    case appStates.NONE_SELECTED:
      appStateView = (
        <Alert
          message="Select a text source above."
          type="info"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
      break;
    case appStates.LOADING:
      appStateView = (
        <Alert
          message="Loading..."
          type="info"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
      break;
    case appStates.READY:
      appStateView = <Game data={data} />;
      break;
    case appStates.ERROR:
      appStateView = (
        <Alert
          message="Error, failed to fetch text data. Perhaps try refreshing the page."
          type="error"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
      break;
  }

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
        <SelectData setData={setData} setFetchState={setFetchState} />
        {appStateView}
      </Content>
    </div>
  );
}

export default App;
