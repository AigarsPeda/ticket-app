import React from "react";
import "./Dashboard.scss";

import Card from "../card/Card";
import TableElements from "../table-elements/TableElements";

const Dashboard: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card-box">
          <Card />
          <TableElements />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
