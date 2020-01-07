import React from "react";
import renderer from "react-test-renderer";

import SelectData from "../SelectData";

describe("<SelectData />", () => {
  test("Renders correctly", () => {
    const tree = renderer
      .create(<SelectData setAppState={jest.fn()} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
