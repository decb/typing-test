import React from "react";
import { Input } from "antd";

import { gameStates } from "./gameStates";

function UserInput(props) {
  const [input, setInput] = React.useState("");

  React.useEffect(
    () => {
      if (
        props.gameState === gameStates.BEFORE ||
        props.gameState === gameStates.OVER
      ) {
        setInput("");
      }
    },
    [props.gameState]
  );

  const handleInput = event => {
    if (props.gameState === gameStates.BEFORE) {
      props.startGame();
    }

    const newInput = event.target.value;

    if (newInput.length > 0 && newInput[newInput.length - 1] === " ") {
      setInput("");
      props.addInputWord(newInput.trim());
    } else {
      setInput(newInput);
    }
  };

  props.setProgress(input);

  return (
    <Input
      type="text"
      value={input}
      onChange={handleInput}
      disabled={props.gameState === gameStates.OVER}
      style={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }}
    />
  );
}

export default UserInput;
