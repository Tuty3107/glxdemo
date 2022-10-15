import React from "react";
import Modal from "react-bootstrap/Modal";

function TailerFilm({...props}) {
  
  return (
    <Modal {...props} size="md" centered >
      <Modal.Header closeButton>{props.title}</Modal.Header>
      <Modal.Body>
        <iframe width="100%" height="315" src={props.src}></iframe>
      </Modal.Body>
    </Modal>
  );
}

export default TailerFilm;
