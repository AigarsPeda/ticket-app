import React, { useState, useEffect } from "react";
import Modal from "../../../reusable/modal/Modal";
import AddTicketForm from "./AddTicketForm";

import { connect } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import { addModal } from "../../../../redux/actions/modal";

type Props = ReturnType<typeof mapStateToProps> &
  // tslint:disable-next-line: no-use-before-declare
  typeof mapDispatchToProps;

const AddTicket: React.FC<Props> = (props) => {
  const { add, addModal } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(add);
  }, [add, setVisible]);

  console.log(add);

  return (
    <Modal
      header="Add New Ticket"
      visible={visible}
      dismiss={() => addModal(false)}
      children={<AddTicketForm />}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  add: state.modal.add
});

const mapDispatchToProps = { addModal };

export default connect(mapStateToProps, mapDispatchToProps)(AddTicket);
