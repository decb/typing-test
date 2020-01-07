export function buildMessage(
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
