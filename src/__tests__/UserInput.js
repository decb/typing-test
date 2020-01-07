import React from "react";
import renderer from "react-test-renderer";

import UserInput from "../UserInput";
import { gameStates } from "../states";

describe("<UserInput />", () => {
  test("Renders correctly", () => {
    const tree = renderer
      .create(
        <UserInput
          gameState={gameStates.BEFORE}
          startGame={jest.fn()}
          addInputWord={jest.fn()}
          setProgress={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
