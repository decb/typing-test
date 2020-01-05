import React from "react";
import { Alert, Layout } from "antd";

import SelectData from "./SelectData";
import Game from "./Game";
import Header from "./Header";
import Introduction from "./Introduction";
import { appStates } from "./states";

const { Content } = Layout;

function App() {
  const [appState, setAppState] = React.useState({
    state: appStates.NONE_SELECTED
  });

  let appStateView = viewFromAppState(appState);

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
        <SelectData setAppState={setAppState} />
        {appStateView}
      </Content>
    </div>
  );
}

export default App;

function viewFromAppState(appState, data) {
  switch (appState.state) {
    case appStates.NONE_SELECTED:
      return (
        <Alert
          message="Select a text source above."
          type="info"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
    case appStates.LOADING:
      return (
        <Alert
          message="Loading..."
          type="info"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
    case appStates.READY:
      return <Game data={appState.data} />;
    case appStates.ERROR:
      return (
        <Alert
          message="Error, failed to fetch text data. Perhaps try refreshing the page."
          type="error"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
    default:
      return (
        <Alert
          message="An unknown error occured. Perhaps try refreshing the page."
          type="error"
          style={{ marginTop: "0.7rem" }}
          showIcon
        />
      );
  }
}
