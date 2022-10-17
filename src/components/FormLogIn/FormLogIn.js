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
          text1="LOG IN"
          text2="/"
          text3="SIGN UP"
          content1={<LogIn />}
          content2={<SignUp />}
        />
      </Modal.Body>
    </Modal>
  );
}

export default FormLogIn;
