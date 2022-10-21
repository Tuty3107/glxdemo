import React from "react";
import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);
function Dropdown({ submenu, dropdown }) {
  return (
    <ul className={cx("dropdown-list")}
    style={dropdown ? { display: "block" } : { display: "none" }}>
      {submenu.map((sub, index) => (
        <li key={index}>
          <a>{sub.content}</a>
        </li>
      ))}
    </ul>
  );
}
Dropdown.propsTypes = {
  submenu: PropTypes.array.isRequired, 
  dropdown: PropTypes.array.isRequired
};
export default Dropdown;
