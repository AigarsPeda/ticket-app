import React, { useState, useEffect } from "react";
import { Link, RouteChildrenProps } from "react-router-dom";

import { connect } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { createUser } from "../../../redux/actions/auth";

import "../Auth.scss";

import { IUser, IError } from "../../../interfaces/interfaces";
import { validateInputs } from "../../../helpers/helpers";

import FormInput from "../../reusable/FormInput";
import RadioInput from "../../reusable/RadioInput";
import Button from "../../reusable/button/Button";

type Props = ReturnType<typeof mapStateToProps> &
  // tslint:disable-next-line: no-use-before-declare
  typeof mapDispatchToProps &
  RouteChildrenProps;

const Register: React.FC<Props> = (props) => {
  const { isAuthenticated, createUser, backEndError, history } = props;

  const [user, setUser] = useState<IUser>({
    username: "",
    password: "",
    role: ""
  });

  const [error, setError] = useState<IError>({
    usernameError: "",
    passwordError: "",
    roleError: ""
  });

  const { username, password } = user;
  const { usernameError, passwordError, roleError } = error;

  const onRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateInputs(user, setError);

    if (isValid) {
      // save user to db
      createUser(user);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value
    }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [history, isAuthenticated]);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onRegisterUser}>
          <h3>Sign Up</h3>
          <div className="form-group">
            <FormInput
              type="text"
              name="username"
              label="Username"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              error={usernameError}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <FormInput
              type="password"
              name="password"
              label="Password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              error={passwordError}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <br />
            <div className="form-check form-check-inline">
              <RadioInput
                id="inlineRadio1"
                name="role"
                labelClassName="form-check-label"
                className="form-check-input"
                value="User"
                error={roleError}
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <RadioInput
                id="inlineRadio2"
                name="role"
                labelClassName="form-check-label"
                className="form-check-input"
                value="Admin"
                error={roleError}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button
            type="submit"
            label="Sign Up"
            className="btn btn-primary btn-block"
            // handleClick={onRegisterUser}
          />
          <p className="forgot-password text-right">
            Already registered?
            <Link to={"/sign-in"}>Login</Link>
          </p>
        </form>
        {backEndError ? (
          <p className="error-feedback">{backEndError}</p>
        ) : undefined}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  backEndError: state.error.error
});

const mapDispatchToProps = { createUser };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
