import data from "./markov";

function randInRange(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export function randomWord() {
  let words = Object.keys(data);
  let randIx = randInRange(0, words.length - 1);
  return words[randIx];
}

export function nextWord(word) {
  let [max, candidates] = data[word];
  let rand = randInRange(0, max);
  let result = Object.keys(candidates)[0] || "a";

  for (let key in candidates) {
    if (candidates[key] > rand) {
      return result;
    }
    result = key;
  }

  return result;
}
