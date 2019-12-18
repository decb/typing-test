import React from "react";

import { addWord, nWords } from "./textGenerator";
import UserInput from "./UserInput";

const wordsSize = 8;

function Words(props) {
  const [lower, setLower] = React.useState(0);
  const [words, setWords] = React.useState(() => nWords(props.data, wordsSize));

  const setCount = n => {
    setLower(n);
    if (lower + wordsSize === words.length) {
      setWords(addWord(props.data, words));
    }
  }

  const visible = words.slice(lower, lower + wordsSize).join(" ");

  return (
    <div>
      <code>{visible}</code>
      <br />
      <UserInput setCount={setCount} />
    </div>
  );
}

export default Words;
