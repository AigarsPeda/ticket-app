import React from "react";
import "./Dashboard.scss";

import Card from "../card/Card";

const Dashboard: React.FC = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card-box">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
