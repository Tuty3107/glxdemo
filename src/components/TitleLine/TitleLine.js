import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./TitleLine.module.scss";
const cx = classNames.bind(styles);

function TitleLine({ children }) {
  return (
    <a href="#" className={cx("title-blog")}>
      <h3>{children}</h3>
    </a>
  );
}

TitleLine.propType = {
  children: PropTypes.node.isRequired
}
export default TitleLine;
