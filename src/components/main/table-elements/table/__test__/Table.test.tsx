import React from "react";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Table from "../Table";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const ticketDataArray = [
  {
    fullName: "Aigars",
    email: "aigarspeda@gmail.com",
    subject: "Test_1",
    description: "test",
    department: "IT",
    priority: "Low",
    created: "2020-08-09T17:05:29.739Z",
    dueDate: "2020-08-09T17:05:29.739Z",
    status: "Open",
    tickedId: "12334354454",
    _id: "121132334545465"
  },
  {
    fullName: "Oskars",
    email: "oskars@gmail.com",
    subject: "Test_2",
    description: "test_2",
    department: "IT",
    priority: "Low",
    created: "2020-08-09T17:05:29.739Z",
    dueDate: "2020-08-09T17:05:29.739Z",
    status: "Close",
    tickedId: "12334354455",
    _id: "121132334545467"
  }
];

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
      tickets: ticketDataArray
    },
    entries: {
      entries: 5
    },
    user: {
      user: {
        // date: "2020-08-13T06:45:10.963Z",
        // role: "User",
        // tickets: [],
        // username: "Aigarsp1",
        // __v: 0,
        // _id: "5f34e176cd9f5238ec3fe1ba"
      }
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

  it("testing table", () => {
    const container = mount(
      <Provider store={store}>
        <Table />
      </Provider>
    );
    // console.log(container.debug());

    const tbody = container.find("tbody");
    const tr = tbody.find("tr");

    expect(container).toHaveLength(1);
    expect(container.find("table")).toHaveLength(1);
    expect(container.find("tbody")).toHaveLength(1);
    expect(container.find("th")).toHaveLength(8);
    expect(tr).toHaveLength(ticketDataArray.length);
  });

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
