import React from "react";

import { gameStates } from "./gameStates";
import { useInterval } from "./useInterval";

const totalSeconds = 4;

function Timer(props) {
  const [seconds, setSeconds] = React.useState(() => totalSeconds);

  useInterval(() => {
    if (props.gameState === gameStates.DURING) {
      if (seconds === 0) {
        props.endGame();
      } else {
        setSeconds(seconds - 1);
      }
    }
  }, 1000);

  return <span>{seconds} seconds</span>;
}

export default Timer;
