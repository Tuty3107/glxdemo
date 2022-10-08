import React from "react";
import classNames from "classnames/bind";
import styles from "./TitleLine.module.scss";
const cx = classNames.bind(styles);

export default function TitleLine({ children }) {
  return (
    <a href="#" className={cx("title-blog")}>
      <h3>{children}</h3>
    </a>
  );
}
