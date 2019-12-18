import React from "react";
import { randomWord, nextWord } from "./textGenerator";

function generateText() {
  const x = randomWord();
  const res = [x];
  for (let i = 1; i < 16; i++) {
    res[i] = nextWord(res[i - 1]);
  }
  return res;
}

function App() {
  const text = generateText().join(" ");
  return <div className="App">{text}</div>;
}

export default App;
