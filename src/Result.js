import React from "react";

const zip = (xs, ys) => xs.map((e, i) => [e, ys[i]]);
const percent = (x, y) => Math.round((y / x) * 100);
const strsToCharArray = s => s.join("").split("");
const sameCount = (xs, ys) =>
  zip(xs, ys)
    .map(pair => (pair[0] === pair[1] ? 1 : 0))
    .reduce((a, b) => a + b);

function Result(props) {
  const { inputWords, targetWords } = props;
  const wordsTyped = inputWords.length;
  const wordsCorrect = sameCount(inputWords, targetWords);
  const wordsCorrectPercent = percent(wordsTyped, wordsCorrect);

  const inputWordsChars = strsToCharArray(inputWords);
  const targetWordsChars = strsToCharArray(targetWords);
  const charsTyped = inputWordsChars.length;
  const charsCorrect = sameCount(inputWordsChars, targetWordsChars);
  const charsCorrectPercent = percent(charsTyped, charsCorrect);

  return (
    <div>
      In one minute, you typed {wordsTyped} words, of which {wordsCorrect} were
      correct ({wordsCorrectPercent}
      %). This amounted to {charsTyped}
      (excluding spaces) characters, of which {charsCorrect} were correct (
      {charsCorrectPercent}
      %).
    </div>
  );
}

export default Result;
