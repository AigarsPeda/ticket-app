import React from "react";
import "./Card.scss";

import Box from "./Box";
import Button from "../../reusable/Button";

import { addModal } from "../../../redux/actions/modal";
import { connect } from "react-redux";

// tslint:disable-next-line: no-use-before-declare
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Card: React.FC<Props> = (props) => {
  const { addModal } = props;

  return (
    <>
      <Button
        type="submit"
        className="btn btn-primary btn-add"
        label="Add Ticket"
        handleClick={() => addModal(true)}
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

const mapStateToProps = () => ({});

const mapDispatchToProps = { addModal };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
