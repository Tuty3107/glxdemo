import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import Submenu from "../Submenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const cx = classNames.bind(styles);
function MenuItems({ items }) {
  const [dropdown, setdropdown] = useState(false);

  return (
    <>
      {items.submenu ? (
        <>
          {items.dropdown ? (
            <li className={cx("primary-nav-tit")}
              onMouseOver={() => setdropdown(true)}
              onMouseLeave={() => setdropdown(false)}>
              {items.content}
              <FontAwesomeIcon icon={faAngleDown} />
              <Dropdown dropdown={dropdown} />
            </li>
          ) : (
            <Submenu key={items.id} items={items.submenu}>
              <li className={cx("primary-nav-tit")}>
                {items.content}
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </Submenu>
          )}
        </>
      ) : (
        <li key={items.id} className={cx("primary-nav-tit")}>
          {items.content}
        </li>
      )}
    </>
  );
}

export default MenuItems;
