import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Auth.scss";

import { IUser, IError } from "../../../interfaces/interfaces";
import { validateInputs } from "../../../helpers/helpers";

import FormInput from "../../reusable/FormInput";
import Button from "../../reusable/Button";

const Login: React.FC = () => {
  const [user, setUser] = useState<IUser>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<IError>({
    usernameError: "",
    passwordError: "",
  });

  const { username, password } = user;
  const { usernameError, passwordError } = error;

  const onLoginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateInputs(user, setError);

    if (isValid) {
      console.log(user);
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
        <form onSubmit={onLoginUser}>
          <h3>Sign In</h3>
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
          <Button
            type="submit"
            label="Sign Up"
            className="btn btn-primary btn-block"
            // handleClick={onRegisterUser}
          />
          <p className="forgot-password text-right">
            Not yet registered?
            <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
