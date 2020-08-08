import React from "react";
import ReactDOM from "react-dom";

import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

import App from "./App";
import Login from "./components/auth/login/Login";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  it("invalid path should redirect to Login", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );
    // expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
