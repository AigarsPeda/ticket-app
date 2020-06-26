import React from "react";

import FormInput from "../../../reusable/FormInput";
import Button from "../../../reusable/Button";
import DropDown from "../../../reusable/dropdown/DropDown";

const LIST = [
  { id: 0, title: "IT" },
  { id: 1, title: "Finance" },
  { id: 2, title: "Sales" },
  { id: 3, title: "Marketing" },
];

const AddTicketForm: React.FC = () => {
  const onChange = () => {
    console.log("click");
  };
  return (
    <form>
      <div className="form-group">
        <FormInput
          type="text"
          name="fullname"
          label="Full Name"
          className="form-control"
          placeholder="Enter Full Name"
          value=""
          error=""
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <FormInput
          type="text"
          name="email"
          label="Email"
          className="form-control"
          placeholder="Enter Email"
          value=""
          error=""
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <DropDown title="Finance" label="Departments" list={LIST} />
      </div>
      <div className="form-group">
        <DropDown title="High" label="Priority" list={LIST} />
      </div>
      <div className="form-group">
        <FormInput
          type="text"
          name="email"
          label="Subject"
          className="form-control"
          placeholder="Enter Subject"
          value=""
          error=""
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value=""
          rows={5}
          cols={40}
          onChange={onChange}
        />
      </div>
      <Button
        className="btn btn-primary"
        type="button"
        label="ADD"
        handleClick={onChange}
      />
      <Button
        className="btn btn-danger ml-2"
        type="button"
        label="CANCEL"
        handleClick={onChange}
      />
    </form>
  );
};

export default AddTicketForm;
