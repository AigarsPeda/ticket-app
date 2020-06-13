import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Auth.scss";

import FormInput from "../../reusable/FormInput";
import RadioInput from "../../reusable/RadioInput";
import Button from "../../reusable/Button";

interface IUser {
  username: string;
  password: string;
  role: string;
}

interface IError {
  usernameError: string;
  passwordError: string;
  roleError: string;
}

const Register: React.FC = () => {
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
    console.log(user);
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
              error=""
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
              error=""
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
                error=""
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
                error=""
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

export default Register;
