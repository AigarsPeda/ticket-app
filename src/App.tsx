import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Dashboard from "./components/main/home/Dashboard";
import PrivateRoute from "./components/private/PrivateRoute";
import Navbar from "./components/layouts/Navbar";

// import NoMatch from "./components/noMatch/NoMatch";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Navbar />
            <div className="App container">
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Login} />
                <Route exact path="/sign-in" component={Login} />
                <Route exact path="/sign-up" component={Register} />
                <Route component={Login} />
              </Switch>
            </div>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
