import React from "react";
import { Link } from "react-router-dom";

import "../Auth.scss";

import FormInput from "../../reusable/FormInput";
import Button from "../../reusable/Button";

const Login: React.FC = () => {
  const handleChange = () => {
    console.log("Spiežu pogas");
  };

  const handleClick = () => {
    console.log("Click click");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <FormInput
              type="text"
              name="username"
              label="Username"
              className="form-control"
              placeholder="Enter Username"
              value=""
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
              value=""
              error=""
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            label="Sign Up"
            className="btn btn-primary btn-block"
            handleClick={handleClick}
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
