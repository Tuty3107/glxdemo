import React from "react";
import Modal from "react-bootstrap/Modal";

function ListModal({...props}) {
  return (
    <Modal {...props} 
        size="md" centered 
        style={{ backgroundColor: "#ffffff", height: "auto"}}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body style={{ padding: "0 50px" }}>
        abc
      </Modal.Body>
    </Modal>
  );
}

export default ListModal;
