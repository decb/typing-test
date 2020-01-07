import React from "react";
import renderer from "react-test-renderer";

import Game from "../Game";

const data = {
  a: [1, { a: 1 }]
};

describe("<Game />", () => {
  test("Renders correctly", () => {
    const tree = renderer.create(<Game data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
