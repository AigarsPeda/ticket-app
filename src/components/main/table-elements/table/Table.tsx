import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "./Table.scss";
import { RootState } from "../../../../redux/reducers";
import { ITicket } from "../../../../interfaces/interfaces";

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

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Table: React.FC<Props> = (props) => {
  const { tickets } = props;
  const [tableTickets, setTableTickets] = useState<ITicket[]>(tickets);

  useEffect(() => {
    const tableEntries = tickets.slice(0, 3);
    setTableTickets(tableEntries);
  }, [tickets]);

  return (
    <div className="col-sm-12 table-responsive">
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
                    <span className="badge badge-danger">{ticket.status}</span>
                  ) : (
                    <span className="badge badge-success">{ticket.status}</span>
                  )}
                </td>
                <td>{moment(ticket.created).format("DD/MM/YYYY")}</td>
                <td>{moment(ticket.dueDate).format("DD/MM/YYYY")}</td>
                <td>
                  <>
                    <a className="btn text-white btn-sm">
                      <i className="fas fa-trash"></i>
                    </a>
                    <a className="btn text-white btn-sm">
                      <i className="fas fa-check"></i>
                    </a>
                    <a className="btn text-white btn-sm">
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                  </>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  tickets: state.tickets.tickets
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
