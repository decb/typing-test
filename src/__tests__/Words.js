import React from "react";
import renderer from "react-test-renderer";

import Words from "../Words";

const progress = "a";
const words = ["ab"];
const range = [0, 1];

describe("<Words />", () => {
  test("Renders correctly", () => {
    const tree = renderer
      .create(<Words progress={progress} words={words} range={range} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
