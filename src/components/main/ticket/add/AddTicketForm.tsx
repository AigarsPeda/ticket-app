import React, { useState } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

import {
  IDepartmentAndPriorities,
  ITicket
} from "../../../../interfaces/interfaces";

import { departmentArray, prioritiesArray } from "../../../../helpers/helpers";
import { addNewTicket } from "../../../../services/ticket.services";
import { addModal } from "../../../../redux/actions/modal";
import { apiEndPoint } from "../../../../Config";

import FormInput from "../../../reusable/FormInput";
import Button from "../../../reusable/button/Button";
import DropDown from "../../../reusable/dropdown/DropDown";

const API_ENDPOINT = apiEndPoint();

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const AddTicketForm: React.FC<Props> = (props) => {
  const { addModal } = props;
  const [department, setDepartment] = useState("Select Department");
  const [priority, setPriority] = useState("Select Priority");
  const [ticket, setTicket] = useState<ITicket>({
    fullName: "",
    email: "",
    subject: "",
    description: "",
    department: "",
    priority: ""
  });

  const { fullName, email, subject, description } = ticket;

  const socket = socketIOClient(API_ENDPOINT);

  const getDropDownValue = (item: IDepartmentAndPriorities) => {
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
      [name]: value
    }));
  };

  const clearFormFields = () => {
    setTicket({
      fullName: "",
      email: "",
      subject: "",
      description: "",
      department: "",
      priority: ""
    });
    setDepartment("Select Department");
    setPriority("Select Priority");
    addModal(false);
  };

  const onAddTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ticket.department = department;
    ticket.priority = priority;

    await addNewTicket(ticket);

    socket.emit("refresh", {});

    clearFormFields();
  };

  return (
    <form onSubmit={onAddTicket}>
      <div className="form-group">
        <FormInput
          type="text"
          name="fullName"
          label="Full Name"
          className="form-control"
          placeholder="Enter Full Name"
          value={fullName}
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
      <Button
        className="btn btn-primary"
        type="submit"
        label="ADD"
        disable={
          !fullName ||
          !email ||
          !subject ||
          !description ||
          !department ||
          !priority
        }
      />
      <Button
        className="btn btn-danger ml-2"
        type="button"
        label="CANCEL"
        handleClick={clearFormFields}
      />
    </form>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = { addModal };

export default connect(mapStateToProps, mapDispatchToProps)(AddTicketForm);
