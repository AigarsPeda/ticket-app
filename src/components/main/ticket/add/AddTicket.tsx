import React, { useState } from "react";
import Modal from "../../../reusable/modal/Modal";
import AddTicketForm from "./AddTicketForm";

const AddTicket: React.FC = () => {
  const [visible, setVisible] = useState(true);

  //   const showModal = () => {
  //     setVisible(true);
  //   };
  const hideModal = () => {
    setVisible(false);
  };
  return (
    <Modal
      header="Add New Ticket"
      visible={visible}
      dismiss={hideModal}
      children={<AddTicketForm />}
    />
  );
};

export default AddTicket;
