import { buildMessage } from "../resultTextBuilder";

describe("Message builder", () => {
  test("No words typed", () => {
    expect(
      buildMessage(0, undefined, undefined, undefined, undefined, undefined)
    ).toBe(
      "You did not complete any words. To try again, press the reset button or select a new text source."
    );
  });

  test("Perfect result", () => {
    expect(buildMessage(1, 1, 100, 1, 1, 100)).toBe(
      "In one minute, you typed 1 words, all of which were correct. This amounted to 1 characters. To try again, press the reset button or select a new text source."
    );
  });

  test("Partially correct result", () => {
    expect(buildMessage(2, 1, 50, 2, 1, 50)).toBe(
      "In one minute, you typed 2 words, of which 1 were correct (50%). This amounted to 2 characters, of which 1 were correct (50%). To try again, press the reset button or select a new text source."
    );
  });
});
