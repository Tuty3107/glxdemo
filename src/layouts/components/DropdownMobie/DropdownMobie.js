import React from "react";
import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import { listItems } from "./ListItems";
import MenuItems from "./MenuItems";

const cx = classNames.bind(styles);
function DropdownMobie() {
  return (
    <ul className={cx("listItems-mobie")}>
      {listItems.map((item) => {
        return <MenuItems key={item.id} items={item} />
      })}
    </ul>
  );
}

export default DropdownMobie;
