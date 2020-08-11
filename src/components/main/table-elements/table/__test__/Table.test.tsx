import React from "react";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Table from "../Table";
// import Enzyme, { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ adapter: new Adapter() });

let state: any;
let mockStore: any;
let store: any;
let history: any;

beforeEach(() => {
  state = {
    auth: {
      isAuthenticated: true
    },
    tickets: {
      tickets: []
    },
    entries: {
      entries: 5
    }
  };
  mockStore = configureMockStore();
  store = mockStore(() => state);
  history = createMemoryHistory();
});

describe("<Table />", () => {
  it("rendering a component and expect text in it", () => {
    // const defaultProps: any = {
    //   history: {
    //     replace: jest.fn()
    //   }
    // };
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Table
          // {...defaultProps}
          />
        </Router>
      </Provider>
    );
    expect(getByTestId("tableComponent")).toHaveTextContent("Full Name");
    expect(getByTestId("tableComponent")).toHaveTextContent("Subject");
  });

  // it("testing", () => {
  //   const container = shallow(
  //     <Provider store={store}>
  //       <Table />
  //     </Provider>
  //   ).dive();

  //   const table = container.find("table");
  //   console.log(table);
  //   const thead = table.find("thead");
  //   // console.log(container.html());
  //   expect(thead).toHaveLength(1);
  // });

  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Table />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
