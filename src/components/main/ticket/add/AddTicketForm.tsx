import React, { useState } from "react";

import FormInput from "../../../reusable/FormInput";
import Button from "../../../reusable/Button";
import DropDown, { List } from "../../../reusable/dropdown/DropDown";
import { departmentArray, prioritiesArray } from "../../../../helpers/helpers";

const AddTicketForm: React.FC = () => {
  const [department, setDepartment] = useState("Select Department");
  const [priority, setPriority] = useState("Select Priority");
  const [ticket, setTicket] = useState({
    fullname: "",
    email: "",
    subject: "",
    description: "",
    department: "",
    priority: "",
  });
  // let departments = departmentArray();
  // let priorities = prioritiesArray();

  const { fullname, email, subject, description } = ticket;

  const getDropDownValue = (item: List) => {
    if (item.key === "department") {
      setDepartment(item.title);
    } else {
      setPriority(item.title);
    }
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTicket((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onAddTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ticket);
  };

  const onCancelClick = () => {
    console.log("Cancel");
  };

  return (
    <form onSubmit={onAddTicket}>
      <div className="form-group">
        <FormInput
          type="text"
          name="fullname"
          label="Full Name"
          className="form-control"
          placeholder="Enter Full Name"
          value={fullname}
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
          value={email}
          error=""
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <DropDown
          title={department}
          label="Departments"
          list={departmentArray()}
          getDropDownValue={getDropDownValue}
        />
      </div>
      <div className="form-group">
        <DropDown
          title={priority}
          label="Priority"
          list={prioritiesArray()}
          getDropDownValue={getDropDownValue}
        />
      </div>
      <div className="form-group">
        <FormInput
          type="text"
          name="subject"
          label="Subject"
          className="form-control"
          placeholder="Enter Subject"
          value={subject}
          error=""
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          name="description"
          value={description}
          rows={2}
          cols={40}
          onChange={onChange}
        />
      </div>
      <Button className="btn btn-primary" type="submit" label="ADD" />
      <Button
        className="btn btn-danger ml-2"
        type="button"
        label="CANCEL"
        handleClick={onCancelClick}
      />
    </form>
  );
};

export default AddTicketForm;
