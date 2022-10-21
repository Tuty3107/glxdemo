import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./FormLogIn.module.scss";
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);
function Field({ placeholder, type }) {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const onBlur = () => {
    if (value.length === 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <>
      <input
        value={value}
        className={cx("inp")}
        placeholder={placeholder}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => onBlur()}
      />
      {valid ? <Alert>Please fill out this field</Alert> : <></>}
    </>
  );
}

export default Field;
Field.prospTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string
}