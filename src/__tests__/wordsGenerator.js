import { addWord, genWords } from "../wordsGenerator";

const data = {
  a: [2, { b: 10, c: 20 }],
  b: [1, { c: 10 }],
  c: [2, { a: 10, c: 5 }]
};

describe("Generating words", () => {
  test("Undefined data generates no words", () => {
    expect(genWords(undefined, 1000)).toEqual([]);
  });

  test("Data with no keys generates no words", () => {
    expect(genWords({}, 1000)).toEqual([]);
  });

  test("Correct number of words generated", () => {
    expect(genWords(data, 10)).toHaveLength(10);
  });

  test("All words are from original data source", () => {
    const original = Object.keys(data);
    const generated = genWords(data, 100);
    expect(generated.every(word => original.includes(word))).toBeTruthy();
  });
});

describe("Adding words", () => {
  test.each([["a"], ["b"], ["c"]])(
    "Word must be one of the candidates",
    before => {
      const words = addWord(data, [before]);
      const newWord = words.slice(-1)[0];
      expect(Object.keys(data[before][1])).toContain(newWord);
    }
  );

  test("Word with no candidates is followed by 'a'", () => {
    const newData = {
      ...data,
      d: [0, []]
    };
    expect(addWord(newData, ["d"])).toEqual(["d", "a"]);
  });

  test("Empty words list returns random word", () => {
    const result = addWord(data, []);
    expect(result).toHaveLength(1);
    expect(Object.keys(data)).toContain(result[0]);
  });

  test("Empty data returns empty array", () => {
    expect(addWord({}, ["a"])).toEqual([]);
  });
});
