import React from "react";
import FormInput from "../../reusable/FormInput";
import "../Auth.scss";
import RadioInput from "../../reusable/RadioInput";
import Button from "../../reusable/Button";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
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
          <h3>Sign Up</h3>
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
            handleClick={handleClick}
          />
          <p className="forgot-password text-right">
            Already registered?
            <Link to={"/sign-in"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
