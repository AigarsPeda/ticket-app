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
        <thead className="font-14 thead-dark">
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
        <tbody className="font-14"></tbody>
      </table>
    </div>
  );
};

export default Table;
