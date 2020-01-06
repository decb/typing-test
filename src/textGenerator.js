export function genWords(data, n) {
  if (data !== undefined) {
    const res = [randomWord(data)];
    for (let i = 1; i < n; i++) {
      res[i] = nextWord(data, res[i - 1]);
    }
    return res;
  } else {
    return [];
  }
}

export function addWord(data, words) {
  const last = words[words.length - 1];
  return words.concat([nextWord(data, last)]);
}

function randInRange(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function randomWord(data) {
  let words = Object.keys(data);
  let randIx = randInRange(0, words.length - 1);
  return words[randIx];
}

function nextWord(data, word) {
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
