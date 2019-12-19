import React from "react";
import { Alert } from "antd";

const zip = (xs, ys) => xs.map((e, i) => [e, ys[i]]);
const percent = (x, y) => Math.round((y / x) * 100);
const strsToCharArray = s => s.join("").split("");
const sameCount = (xs, ys) =>
  xs.length === 0
    ? 0
    : zip(xs, ys)
        .map(pair => (pair[0] === pair[1] ? 1 : 0))
        .reduce((a, b) => a + b);

function buildMessage(
  wordsTyped,
  wordsCorrect,
  wordsCorrectPercent,
  charsTyped,
  charsCorrect,
  charsCorrectPercent
) {
  const tryAgain =
    "To try again, press the reset button or select a new text source.";
  if (wordsTyped === 0) {
    return "You did not complete any words. " + tryAgain;
  }

  const ofWhich = (n, nPercent) =>
    `, of which ${n} were correct (${nPercent}%). `;
  let result = `In one minute, you typed ${wordsTyped} words`;

  if (wordsTyped === wordsCorrect) {
    result += `, all of which were correct. `;
  } else {
    result += ofWhich(wordsCorrect, wordsCorrectPercent);
  }

  result += `This amounted to ${charsTyped} characters`;
  if (charsTyped !== charsCorrect) {
    result += ofWhich(charsCorrect, charsCorrectPercent);
  }

  result += tryAgain;

  return result;
}

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

  const finalMessage = buildMessage(
    wordsTyped,
    wordsCorrect,
    wordsCorrectPercent,
    charsTyped,
    charsCorrect,
    charsCorrectPercent
  );

  return (
    <Alert message="Test complete" description={finalMessage} type="success" />
  );
}

export default Result;
