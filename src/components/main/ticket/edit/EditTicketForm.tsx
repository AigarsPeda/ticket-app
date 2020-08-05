import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

import { RootState } from "../../../../redux/reducers";
import {
  IDepartmentAndPriorities,
  ITicket
} from "../../../../interfaces/interfaces";

import FormInput from "../../../reusable/FormInput";
import Button from "../../../reusable/button/Button";
import DropDown from "../../../reusable/dropdown/DropDown";

import { departmentArray, prioritiesArray } from "../../../../helpers/helpers";
import { editTicket } from "../../../../services/ticket.services";
import { editModal } from "../../../../redux/actions/modal";

const API_ENDPOINT = "http://localhost:5000";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const EditTicketForm: React.FC<Props> = (props) => {
  const { selectedTicket, editModal } = props;
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

  useEffect(() => {
    if (selectedTicket) {
      setTicket({
        fullName: selectedTicket.fullName,
        email: selectedTicket.email,
        subject: selectedTicket.subject,
        description: selectedTicket.description,
        department: selectedTicket.department,
        priority: selectedTicket.priority
      });
      setDepartment(selectedTicket.department);
      setPriority(selectedTicket.priority);
    }
  }, [selectedTicket]);

  const getDropDownValue = (item: IDepartmentAndPriorities) => {
    if (item.key === "department") {
      setDepartment(item.title);
      console.log(item.title);
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

  const onEditTicket = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ticket.department = department;
    ticket.priority = priority;

    if (!selectedTicket || !selectedTicket._id) {
      return;
    }
    await editTicket(selectedTicket._id, ticket);
    editModal(false);

    socket.emit("refresh", {});
  };

  return (
    <form onSubmit={onEditTicket}>
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
        label="Edit"
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
        handleClick={() => editModal(false)}
      />
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedTicket: state.tickets.selectedTicket
});
const mapDispatchToProps = { editModal };

export default connect(mapStateToProps, mapDispatchToProps)(EditTicketForm);
