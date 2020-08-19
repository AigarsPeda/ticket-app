import React from "react";
import ReactDOM from "react-dom";

// import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/matchers";

import renderer from "react-test-renderer";
import Box from "../Box";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("<Box /> component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Box
        title="Total Tickets"
        cardValue={2}
        iconClass="fas fa-tag"
        cardValueClass="text-success"
        type="High"
        status="priority"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("testing table", () => {
    const wrapper = mount(
      <Box
        title="Total Tickets"
        cardValue={2}
        iconClass="fas fa-tag"
        cardValueClass="text-success"
        type="High"
        status="priority"
      />
    );

    // console.log(wrapper.debug());

    expect(wrapper.find("p").text()).toBe("Total Tickets");
    expect(wrapper.find("h3").text()).toBe("2");
    expect(wrapper.find("h3").hasClass("text-success")).toBe(true);
  });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Box
          title="Total Tickets"
          cardValue={2}
          iconClass="fas fa-tag"
          type="High"
          status="priority"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
