import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { UserSignIn } from "../UserInfo";
import classNames from "classnames/bind";
import styles from "./ToggleLogIn.module.scss";

const cx = classNames.bind(styles);
function ToggleLogIn({ onClick }) {
  const user = localStorage.getItem("userSignIn");
  return (
    <>
      {user ? (
        <li className={cx("userInfo")}>
          <UserSignIn />
        </li>
      ) : (
        <li className={cx("login")} onClick={onClick}>
          <FontAwesomeIcon icon={faUser} />
          Đăng nhập
        </li>
      )}
    </>
  );
}

export default ToggleLogIn;
