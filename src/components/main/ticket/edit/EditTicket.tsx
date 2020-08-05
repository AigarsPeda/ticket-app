import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { RootState } from "../../../../redux/reducers";
import { editModal } from "../../../../redux/actions/modal";

import Modal from "../../../reusable/modal/Modal";
import EditTicketForm from "./EditTicketForm";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const EditTicket: React.FC<Props> = (props) => {
  const { edit, editModal } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(edit);
  }, [edit, setVisible]);

  return (
    <Modal
      header="Edit Ticket"
      visible={visible}
      dismiss={() => editModal(false)}
      children={<EditTicketForm />}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  edit: state.modal.edit
});

const mapDispatchToProps = { editModal };

export default connect(mapStateToProps, mapDispatchToProps)(EditTicket);
