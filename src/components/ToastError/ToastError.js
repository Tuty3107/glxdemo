import React, { useState }from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ToastError.module.scss";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const cx = classNames.bind(styles);
function ToastError({...props}) {
  return (
    <ToastContainer position="top-end" className={cx("toast-item")}>
      <Toast>
        <Toast.Body className={cx("toast-item-body")}>
            Your account has been used. Create a new one.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastError;
