import React from "react";
import { Statistic } from "antd";

import { gameStates } from "./gameStates";
import { useInterval } from "./useInterval";

const totalSeconds = 3;

function Timer(props) {
  const [seconds, setSeconds] = React.useState(totalSeconds);

  React.useEffect(
    () => {
      if (props.gameState === gameStates.BEFORE) {
        setSeconds(totalSeconds);
      }
    },
    [props.gameState]
  );

  useInterval(() => {
    if (props.gameState === gameStates.DURING) {
      if (seconds === 0) {
        props.endGame();
      } else {
        setSeconds(seconds - 1);
      }
    }
  }, 1000);

  return <Statistic title="Time remaining (seconds)" value={seconds} />;
}

export default Timer;
