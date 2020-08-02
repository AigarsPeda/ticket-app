import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import "./Card.scss";

import Box from "./Box";
import Button from "../../reusable/button/Button";

import { addModal } from "../../../redux/actions/modal";
import { RootState } from "../../../redux/reducers";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Card: React.FC<Props> = (props) => {
  const { addModal, tickets } = props;

  const findByStatus = (values: string) => {
    return _.filter(tickets, ["status", values]).length;
  };

  const findByPriority = (values: string) => {
    return _.filter(tickets, ["priority", values]).length;
  };

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
          <Box
            title="Total Tickets"
            cardValue={tickets.length}
            iconClass="fas fa-tag"
          />
          <Box
            title="Open Tickets"
            cardValue={findByStatus("Open")}
            iconClass="fas fa-shield-alt"
            cardValueClass="text-success"
          />
          <Box
            title="Open Close"
            cardValue={findByStatus("Close")}
            iconClass="fas fa-shield-alt"
            cardValueClass="text-muted"
          />
          <Box
            title="High Priority Tickets"
            cardValue={findByPriority("High")}
            iconClass="fas fa-temperature-high"
            cardValueClass="text-danger"
          />
          <Box
            title="Medium Priority Tickets"
            cardValue={findByPriority("Medium")}
            iconClass="fas fa-folder-minus"
            cardValueClass="text-warning"
          />
          <Box
            title="Low Priority Tickets"
            cardValue={findByPriority("Low")}
            iconClass="fas fa-battery-quarter"
            cardValueClass="text-muted"
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  tickets: state.tickets.tickets
});

const mapDispatchToProps = { addModal };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
