import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary = false,
  small = false,
  medium = false,
  large = false,
  xl = false,
  colorBorder = false,
  colorBg = false,
}) {
  let Comp = "button";
  const props = {};

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    xl,
    large,
    medium,
    small,
    colorBorder,
    colorBg,
  });
  return (
    <Comp className={classes} {...props}>
      <span className={cx("btn-text")}>{children}</span>
    </Comp>
  );
}

Button.propsTypes = {
  to: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  xl: PropTypes.bool,
  colorBorder: PropTypes.bool,
  colorBg: PropTypes.bool,
};
export default Button;
