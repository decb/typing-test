import React from "react";
import renderer from "react-test-renderer";

import Result from "../Result";

const inputWords = ["a"];
const targetWords = ["b"];

describe("<Result />", () => {
  test("Renders correctly", () => {
    const tree = renderer
      .create(<Result inputWords={inputWords} targetWords={targetWords} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
