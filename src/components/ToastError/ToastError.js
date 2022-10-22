import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function ToastError({...props}) {
  return (
    <ToastContainer position="top-end" style={{padding: '20px'}}>
      <Toast>
        <Toast.Body style={{color: 'red', fontSize: '1.6rem'}}>
            Oosp!!! Something went wrong. 
            Maybe your account has been used. Create a new one.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastError;
