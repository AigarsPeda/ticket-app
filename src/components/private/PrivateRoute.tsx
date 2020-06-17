import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers";

type propsFromRoute = {
  component: React.FC;
  path: string;
  exact: boolean;
};

type Props = ReturnType<typeof mapStateToProps> & propsFromRoute;
//RouteChildrenProps &
// & typeof mapDispatchToProps

const PrivateRoute: React.FC<Props> = (props) => {
  const { isAuthenticated, component, path, exact } = props;
  return !isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(PrivateRoute);
