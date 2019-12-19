import React from "react";

function UserInput(props) {
  const [buffer, setBuffer] = React.useState("");
  const [input, setInput] = React.useState("");

  const handleInput = event => {
    const newInput = event.target.value;

    if (newInput.length > 0 && newInput[newInput.length - 1] === " ") {
      setInput("");
      setBuffer(buffer + newInput);
    } else {
      setInput(newInput);
    }
  }

  props.setCount(buffer.split(/ +/).length - 1);
  props.setProgress(input);

  return (
    <input type="text" value={input} onChange={handleInput} />
  );
}

export default UserInput;
