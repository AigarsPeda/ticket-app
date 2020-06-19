import React from "react";
import "./Card.scss";

import Box from "./Box";

const Card: React.FC = () => {
  return (
    <div>
      <button className="btn btn-primary btn-add">Add Ticket</button>
      <div className="text-center mb-2">
        <div className="row">
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
        </div>
      </div>
    </div>
  );
};

export default Card;
