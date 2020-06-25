import React, { ReactNode } from "react";
import "./Modal.scss";

interface Props {
  header: string;
  visible: boolean;
  children: ReactNode;
  dismiss: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const { header, visible, children, dismiss } = props;
  return (
    <>
      {visible ? (
        <div className="modal-wrapper">
          <div className="modal-box">
            <div className="modal-box-header">
              <h3>{header}</h3>
              <button onClick={dismiss}>X</button>
            </div>
            {children}
          </div>
          <div className="modal-bg"></div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
