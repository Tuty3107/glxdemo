import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { useFirestore } from "~/hooks";
import MenuItems from "./MenuItems";

const cx = classNames.bind(styles);
function Navbar1() {
  const navItems = useFirestore("submenu");
  return (
    <div className={cx("nav-wrapper")}>
      <div className={cx("nav-container")}>
        <ul className={cx("navbar")}>
          {navItems.map((items) => (
            <MenuItems key={items.id} items={items} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Navbar1;

