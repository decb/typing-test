import React from "react";

import { addWord, nWords } from "./textGenerator";
import UserInput from "./UserInput";

const wordsSize = 16;

function Words(props) {
  const [lower, setLower] = React.useState(0);
  const [words, setWords] = React.useState(() => nWords(props.data, wordsSize));
  const [progress, setProgress] = React.useState("");

  const setCount = n => {
    setLower(n);
    if (lower + wordsSize === words.length) {
      setWords(addWord(props.data, words));
    }
  };

  const first = words.slice(lower)[0];
  const firstStyle = {
    "background-color":
      first === progress
        ? "#00ff00"
        : first.indexOf(progress) === 0
          ? "yellow"
          : "red"
  };
  const visible = words.slice(lower + 1, lower + wordsSize).join(" ");

  return (
    <div>
      <code>
        <span style={firstStyle}>{first}</span> {visible}
      </code>
      <br />
      <UserInput setCount={setCount} setProgress={setProgress} />
    </div>
  );
}

export default Words;
