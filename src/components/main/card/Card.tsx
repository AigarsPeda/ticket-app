import React from "react";
import "./Card.scss";

import Box from "./Box";
import Button from "../../reusable/Button";

import { addModal } from "../../../redux/actions/modal";
import { connect } from "react-redux";
import { RootState } from "../../../redux/reducers";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Card: React.FC<Props> = (props) => {
  const { addModal, tickets } = props;

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
          {tickets.map((ticket) => {
            return (
              <Box
                title={ticket.subject}
                cardValue={ticket.priority}
                iconClass="fas fa-tag"
              />
            );
          })}
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
