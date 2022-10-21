import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function MenuItems({ items }) {
  const [dropdown, setdropdown] = useState(false);

  return (
    <>
      {items.submenu ? (
        <li className={cx("nav-item-mobie")}
          onMouseOver={() => setdropdown(true)}
          onMouseLeave={() => setdropdown(false)}
        >
          <Link to={items.to}>{items.content}</Link>
          <FontAwesomeIcon
            icon={faAngleDown}
            style={dropdown ? { display: "none" } : { display: "block" }}
          />
          <Dropdown submenu={items.submenu} dropdown={dropdown} />
        </li>
      ) : (
        <li className={cx("nav-item-mobie")}>
          <Link to={items.to}>{items.content}</Link>
        </li>
      )}
    </>
  );
}
MenuItems.propTypes = {
  items: PropTypes.object.isRequired
}
export default MenuItems;
