import React from "react";

import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Login from "../Login";

let state: any;
let mockStore: any;
let store: any;

beforeEach(() => {
  state = {
    auth: {
      isAuthenticated: false
    },
    error: {
      backEndError: null
    }
  };
  mockStore = configureMockStore();
  store = mockStore(() => state);
});

describe("<Login />", () => {
  it("rendering a component that uses withRouter", () => {
    const defaultProps: any = {
      history: {
        replace: jest.fn()
      }
    };

    // const state = {
    //   auth: {
    //     isAuthenticated: false
    //   },
    //   error: {
    //     backEndError: null
    //   }
    // };

    // const mockStore = configureMockStore();

    // const store = mockStore(() => state);
    // store.getState();

    const history = createMemoryHistory();
    // console.log(history);
    // const route = "/some-route";
    // history.push(route);
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Login {...defaultProps} />
        </Router>
      </Provider>
    );
    expect(getByTestId("loginComponent")).toHaveTextContent("Sign In");
    expect(getByTestId("loginComponent")).toHaveTextContent(
      "Not yet registered?"
    );
  });

  it("matches snapshot", () => {
    const defaultProps: any = {
      history: {
        replace: jest.fn()
      }
    };

    const history = createMemoryHistory();

    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <Login {...defaultProps} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
