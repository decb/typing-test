import React from "react";
import { Alert } from "antd";

const zipMap = (f, xs, ys) => xs.map((e, i) => f([e, ys[i]]));
const percent = (x, y) => Math.round((y / x) * 100);
const listPairSimilarity = pair => {
  const [array1, array2] = pair.map(e => e.split(""));
  const comparison = array2.map((e, i) => (array1[i] === e ? 1 : 0));
  return sum(comparison);
};
const sum = xs => xs.reduce((a, b) => a + b);
const sameCount = (xs, ys) =>
  xs.length === 0
    ? 0
    : sum(zipMap(pair => (pair[0] === pair[1] ? 1 : 0), xs, ys));

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
    return `You did not complete any words. ${tryAgain}`;
  }

  const ofWhich = (n, nPc) => `, of which ${n} were correct (${nPc}%). `;
  let result = [`In one minute, you typed ${wordsTyped} words`];

  if (wordsTyped === wordsCorrect) {
    result.push(", all of which were correct. ");
  } else {
    result.push(ofWhich(wordsCorrect, wordsCorrectPercent));
  }

  result.push(`This amounted to ${charsTyped} characters`);
  if (charsTyped !== charsCorrect) {
    result.push(ofWhich(charsCorrect, charsCorrectPercent));
  } else {
    result.push(". ");
  }

  result.push(tryAgain);

  return result.join("");
}

function Result(props) {
  const { inputWords, targetWords } = props;
  const wordsTyped = inputWords.length;
  const wordsCorrect = sameCount(inputWords, targetWords);
  const wordsCorrectPercent = percent(wordsTyped, wordsCorrect);

  const charsCorrect = sum(zipMap(listPairSimilarity, inputWords, targetWords));
  const charsTyped = inputWords.join("").split("").length;
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
