import { wordCalculation, charCalculation } from "../resultCalculator";

describe("Words result calculation", () => {
  const perfectCase = [
    5,
    ["a", "b", "c", "d", "e"],
    ["a", "b", "c", "d", "e"],
    [5, 100]
  ];

  const mixedCase = [
    5,
    ["a", "x", "c", "x", "e"],
    ["a", "b", "c", "d", "e"],
    [3, 60]
  ];

  const worstCase = [
    5,
    ["y", "y", "y", "y", "y"],
    ["a", "b", "c", "d", "e"],
    [0, 0]
  ];

  test.each([perfectCase, mixedCase, worstCase])(
    "Correct score for given case",
    (wordsTyped, inputWords, targetWords, result) => {
      expect(wordCalculation(wordsTyped, inputWords, targetWords)).toEqual(
        result
      );
    }
  );
});

describe("Characters result calculation", () => {
  const perfectCase = [6, ["aa", "bb", "cc"], ["aa", "bb", "cc"], [6, 100]];

  const mixedCase = [6, ["ax", "bx", "cx"], ["aa", "bb", "cc"], [3, 50]];

  const worstCase = [5, ["yy", "yy", "yy"], ["aa", "bb", "cc"], [0, 0]];

  test.each([perfectCase, mixedCase, worstCase])(
    "Correct score for given case",
    (charsTyped, inputWords, targetWords, result) => {
      expect(charCalculation(charsTyped, inputWords, targetWords)).toEqual(
        result
      );
    }
  );
});
