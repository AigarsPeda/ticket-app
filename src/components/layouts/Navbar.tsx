import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers";
import { loginUser, logOut } from "../../redux/actions/auth";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
// & RouteChildrenProps;

const Navbar: React.FC<Props> = (props) => {
  const { isAuthenticated, logOut } = props;
  const history = useHistory();

  const logoutUserButton = () => {
    history.push("/");
    console.log("Click");
    logOut();
  };

  return (
    <>
      {isAuthenticated ? (
        <nav className="navbar">
          <div className="container">
            <Link to="/dashboard" className="navbar-brand">
              Ticket App
            </Link>
            <div className="">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    href="#!"
                    className="nav-link"
                    onClick={() => logoutUserButton()}
                  >
                    <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : undefined}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = { loginUser, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
