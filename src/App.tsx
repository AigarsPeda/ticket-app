import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
