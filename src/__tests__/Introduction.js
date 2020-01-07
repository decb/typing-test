import React from "react";
import renderer from "react-test-renderer";

import Introduction from "../Introduction";

describe("<Introduction />", () => {
  test("Renders correctly", () => {
    const tree = renderer.create(<Introduction />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
