export function wordCalculation(wordsTyped, inputWords, targetWords) {
  const wordsCorrect = sameCount(inputWords, targetWords);
  const wordsCorrectPercent = percent(wordsTyped, wordsCorrect);
  return [wordsCorrect, wordsCorrectPercent];
}

export function charCalculation(charsTyped, inputWords, targetWords) {
  const charsCorrect = sum(zipMap(listPairSimilarity, inputWords, targetWords));
  const charsCorrectPercent = percent(charsTyped, charsCorrect);
  return [charsCorrect, charsCorrectPercent];
}

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
