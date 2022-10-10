import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./QuickBoxTicket.module.scss";
import { useFirestore } from "~/hooks";

const cx = classNames.bind(styles);
function TitleBuyTicket() {
  const [checked, setChecked] = useState();
  const labelQuickbox = useFirestore("labelQuickbox");
  return (
    <div className={cx("labelQuickbox")}>
      {labelQuickbox.map((item) => (
        <div className={cx("labelItem")} key={item.id}>
          <input
            id={item.id}
            type="radio"
            className={cx("tab-selection")}
            checked={checked === item.id}
            onChange={() => setChecked(item.id)}
          />
          <label htmlFor={item.id} className={cx("tab-label")}>
            {item.title}
          </label>
        </div>
      ))}
    </div>
  );
}
export default TitleBuyTicket;
