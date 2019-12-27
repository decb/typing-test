import React from "react";
import { Input } from "antd";

import { gameStates } from "./states";

function UserInput(props) {
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    if (
      props.gameState === gameStates.BEFORE ||
      props.gameState === gameStates.OVER
    ) {
      setInput("");
    }
  }, [props.gameState]);

  const handleInput = event => {
    if (props.gameState === gameStates.BEFORE) {
      props.startGame();
    }

    const newInput = event.target.value.toLowerCase();

    const completeEntry = new RegExp(/[\S]+\s/);
    const partialEntry = new RegExp(/(^$)|([\S]+)/);

    if (completeEntry.test(newInput)) {
      setInput("");
      props.addInputWord(newInput.trim());
    } else if (partialEntry.test(newInput)) {
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
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      autoComplete="off"
      style={{
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }}
    />
  );
}

export default UserInput;
