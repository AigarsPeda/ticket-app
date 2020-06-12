import React from "react";
import FormInput from "../../reusable/FormInput";
import "../Auth.scss";

const Register: React.FC = () => {
  const handleChange = () => {
    console.log("Spiežu pogas");
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
        </form>
      </div>
    </div>
  );
};

export default Register;
