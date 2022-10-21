import React from "react";
import classNames from "classnames/bind";
import styles from "./Dropdown.module.scss";
import MenuItems from "./MenuItems";
import { useFirestore } from "~/hooks";

const cx = classNames.bind(styles);
function DropdownMobie() {
  const listItems = useFirestore("submenu");

  return (
    <ul className={cx("listItems-mobie")}>
      {listItems.map((item) => {
        return <MenuItems key={item.id} items={item} />
      })}
    </ul>
  );
}

export default DropdownMobie;
