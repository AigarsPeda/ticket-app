import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { createUser } from "../../../redux/actions/auth";

import "../Auth.scss";

import { IUser, IError } from "../../../interfaces/interfaces";
import { validateInputs } from "../../../helpers/helpers";

import FormInput from "../../reusable/FormInput";
import RadioInput from "../../reusable/RadioInput";
import Button from "../../reusable/Button";

const Register: React.FC<any> = (props) => {
  const { isAuthenticated, createUser } = props;

  const [user, setUser] = useState<IUser>({
    username: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState<IError>({
    usernameError: "",
    passwordError: "",
    roleError: "",
  });

  const { username, password } = user;
  const { usernameError, passwordError, roleError } = error;

  const onRegisterUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateInputs(user, setError);

    if (isValid) {
      console.log(user);
      createUser(user);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((state) => ({
      ...state,
      [name]: value,
    }));
  };

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
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { createUser })(Register);
