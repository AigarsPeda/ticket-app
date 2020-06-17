import React from "react";
import { Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Dashboard from "./components/main/home/Dashboard";
import PrivateRoute from "./components/private/PrivateRoute";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="App container">
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
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
