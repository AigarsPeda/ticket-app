import React from "react";
import "./Card.scss";

import Box from "./Box";
import Button from "../../reusable/Button";

const Card: React.FC = () => {
  const handleClick = () => {
    console.log("Click click");
  };

  return (
    <>
      <Button
        type="button"
        className="btn btn-primary btn-add"
        label="Add Ticket"
        handleClick={handleClick}
      />
      <div className="text-center mb-2">
        <div className="row">
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
          <Box
            title="Open Tickets"
            cardValue="120"
            iconClass="fas fa-archive"
          />
          <Box title="Total Ticket" cardValue="40" iconClass="fas fa-tag" />
          <Box title="Total Ticket" cardValue="20" iconClass="fas fa-tag" />
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
          <Box title="Total Ticket" cardValue="100" iconClass="fas fa-tag" />
        </div>
      </div>
    </>
  );
};

export default Card;
