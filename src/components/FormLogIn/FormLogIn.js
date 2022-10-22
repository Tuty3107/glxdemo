import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import TabChange from "../TabChange";
import Modal from "react-bootstrap/Modal";

function FormLogIn(props) {

  return (
    <Modal {...props} size="md" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body style={{ padding: "0 50px" }}>
        <TabChange
          text1="SIGN UP"
          text2="/"
          text3="LOG IN"
          content1={<SignUp onClick={props.onHide} />}
          content2={<LogIn />}
        />
      </Modal.Body>
    </Modal>
  );
}

export default FormLogIn;
