import React from "react";
import renderer from "react-test-renderer";

import Timer from "../Timer";
import { gameStates } from "../states";

describe("<Timer />", () => {
  test("Renders correctly", () => {
    const tree = renderer
      .create(<Timer gameState={gameStates.BEFORE} setGameState={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
