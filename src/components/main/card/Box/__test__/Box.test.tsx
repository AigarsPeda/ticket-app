import React from "react";
import ReactDOM from "react-dom";

// import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/matchers";

import renderer from "react-test-renderer";
import Box from "../Box";

describe("button component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Box title="Total Tickets" cardValue={2} iconClass="fas fa-tag" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Box title="Total Tickets" cardValue={2} iconClass="fas fa-tag" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
