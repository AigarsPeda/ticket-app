import React from "react";
import "./Table.scss";

const TABLE_HEAD = [
  "ID",
  "Full Name",
  "Subject",
  "Priority",
  "Status",
  "Created",
  "Completed",
  "Action",
];

const Table: React.FC = () => {
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
          <td>#12</td>
          <td>Aigars Peda</td>
          <td>Testing</td>
          <td>
            <span className="badge badge-danger">High</span>
          </td>
          <td>
            <span className="badge badge-success">Open</span>
          </td>
          <td>12/12/2020</td>
          <td>12/12/2020</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;
