import React from "react";
import { addWord, nWords } from "./textGenerator";

const wordsSize = 16;

function Words(props) {
  const [lower, setLower] = React.useState(0);
  const [words, setWords] = React.useState(() => nWords(props.data, wordsSize));

  const inc = () => {
    setLower(lower + 1);

    if (lower + wordsSize === words.length) {
      setWords(addWord(props.data, words));
    }
  };

  const dec = () => {
    if (lower > 0) {
      setLower(lower - 1);
    }
  };

  const visible = words.slice(lower, lower + wordsSize).join(" ");

  return (
    <div>
      <code>{visible}</code>
      <br />
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default Words;
