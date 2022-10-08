import React from "react";
import classNames from "classnames/bind";
import styles from "./Select.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Select({ children, onChange, label}) {

  return (
    <form className={cx("form-select")}>
      <div className={cx("group-select")}>
        <a className={cx("btn-select")}>
          <label className={cx("btn-select-value")}>{label}</label>
          <span className={cx("btn-select-arrow")}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
          <select name="options-select"
            className={cx("options-select")}
            onChange={onChange}>
              {children}
            </select>
        </a>
      </div>
    </form>
  );
}

export default Select;
