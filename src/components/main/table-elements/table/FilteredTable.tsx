import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client";
import moment from "moment";

import "./Table.scss";

import { RootState } from "../../../../redux/reducers";
import { ITicket } from "../../../../interfaces/interfaces";

import { selectedTicket } from "../../../../redux/actions/tickets";
import { editModal } from "../../../../redux/actions/modal";
import {
  deleteTicket,
  closeTicket
} from "../../../../services/ticket.services";

import Entries from "../elements/Entries";

const API_ENDPOINT = "http://localhost:5000";

const TABLE_HEAD = [
  "ID",
  "Full Name",
  "Subject",
  "Priority",
  "Status",
  "Created",
  "Completed",
  "Action"
];

// REFACTORED TABLE COMPONENT TO USE useSelector AND useDispatch HOOK FROM REDUX

const FilteredTable: React.FC = () => {
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const entries = useSelector((state: RootState) => state.tickets.entries);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const history = useHistory();

  const [tableTickets, setTableTickets] = useState<ITicket[]>(tickets);

  const socket = socketIOClient(API_ENDPOINT);

  useEffect(() => {
    const tableEntries = tickets.slice(0, entries);
    setTableTickets(tableEntries);
  }, [tickets, entries]);

  const openEditModal = (ticket: ITicket) => {
    dispatch(editModal(true));
    dispatch(selectedTicket(ticket));
  };

  const deleteUserTicket = (ticket: ITicket) => {
    if (!ticket || !ticket._id) {
      return;
    }
    deleteTicket(ticket._id);
    socket.emit("refresh", {});
  };

  const closeUserTicket = (ticket: ITicket) => {
    if (!ticket || !ticket._id) {
      return;
    }
    closeTicket(ticket._id);
    socket.emit("refresh", {});
  };

  const goBackToDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-5">
          <div onClick={() => goBackToDashboard()}>
            <i className="fas fa-arrow-left back"></i>
          </div>
          <Entries />
        </div>
        <div className="col-sm-5 title">
          <h3>High Priority Tickets</h3>
        </div>
      </div>
      <div className="table-responsive" data-testid="tableComponent">
        <table className="table table-centered mb-0" id="ticketTable">
          <thead className="font-14 text-light">
            <tr>
              {TABLE_HEAD.map((tableHead, index) => {
                return (
                  <th key={index} className="font-weight-medium">
                    {tableHead}&nbsp;
                    <i className="fas fa-angle-up icon"></i>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="font-14 text-light">
            {tableTickets.map((ticket) => {
              return (
                <tr key={ticket._id}>
                  <td>{ticket.tickedId}</td>
                  <td>{ticket.fullName}</td>
                  <td>{ticket.subject}</td>
                  <td>
                    {ticket.priority === "High" ? (
                      <span className="badge badge-danger">
                        {ticket.priority}
                      </span>
                    ) : ticket.priority === "Medium" ? (
                      <span className="badge badge-warning">
                        {ticket.priority}
                      </span>
                    ) : (
                      <span className="badge badge-secondary">
                        {ticket.priority}
                      </span>
                    )}
                  </td>
                  <td>
                    {ticket.status === "Open" ? (
                      <span className="badge badge-danger">
                        {ticket.status}
                      </span>
                    ) : (
                      <span className="badge badge-success">
                        {ticket.status}
                      </span>
                    )}
                  </td>
                  <td>{moment(ticket.created).format("DD/MM/YYYY")}</td>
                  <td>{moment(ticket.dueDate).format("DD/MM/YYYY")}</td>
                  <td>
                    {user.role === "Admin" ? (
                      <>
                        <a
                          onClick={() => deleteUserTicket(ticket)}
                          className="btn text-white btn-sm"
                        >
                          <i className="fas fa-trash"></i>
                        </a>
                        <a
                          onClick={() => closeUserTicket(ticket)}
                          className="btn text-white btn-sm"
                        >
                          <i className="fas fa-check"></i>
                        </a>
                        <a
                          onClick={() => openEditModal(ticket)}
                          className="btn text-white btn-sm"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </>
                    ) : (
                      <>
                        <a className="btn text-white btn-sm disabled">
                          <i className="fas fa-trash"></i>
                        </a>
                        <a className="btn text-white btn-sm disabled">
                          <i className="fas fa-check"></i>
                        </a>
                        <a className="btn text-white btn-sm disabled">
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FilteredTable;
