import React from "react";
import { Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={Register} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
