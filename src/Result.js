import React from "react";
import { Alert } from "antd";

import { wordCalculation, charCalculation } from "./resultCalculator";
import { buildMessage } from "./resultTextBuilder";

function Result(props) {
  const { inputWords, targetWords } = props;
  const wordsTyped = inputWords.length;
  const [wordsCorrect, wordsCorrectPercent] = wordCalculation(
    wordsTyped,
    inputWords,
    targetWords
  );

  const charsTyped = inputWords.join("").split("").length;
  const [charsCorrect, charsCorrectPercent] = charCalculation(
    charsTyped,
    inputWords,
    targetWords
  );

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
