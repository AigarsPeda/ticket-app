import React, { useState } from "react";
import "./Card.scss";

import Box from "./Box";
import Button from "../../reusable/Button";
import Modal from "../../reusable/modal/Modal";

const Card: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="submit"
        className="btn btn-primary btn-add"
        label="Add Ticket"
        handleClick={showModal}
      />
      <Modal
        visible={visible}
        header="Add New Ticket"
        dismiss={hideModal}
        children="This is just a test "
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
