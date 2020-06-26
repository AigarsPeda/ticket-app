import React from "react";
import "./Dashboard.scss";

import Card from "../card/Card";
import TableElements from "../table-elements/TableElements";
import AddTicket from "../ticket/add/AddTicket";

const Dashboard: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card-box">
          <Card />
          <TableElements />
          <AddTicket />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
