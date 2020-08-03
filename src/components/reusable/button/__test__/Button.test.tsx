import React from "react";
import ReactDOM from "react-dom";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/matchers";

import renderer from "react-test-renderer";

import Button from "../Button";

afterEach(cleanup);

describe("button component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Button
        label="Click"
        type="button"
        className="btn btn-danger ml-2"
      ></Button>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders button correctly", () => {
    const { getByTestId } = render(
      <Button
        label="Click"
        type="button"
        className="btn btn-danger ml-2"
      ></Button>
    );
    expect(getByTestId("button").textContent).toBe("Click");
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Button
          label="Click"
          type="button"
          className="btn btn-danger ml-2"
        ></Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
