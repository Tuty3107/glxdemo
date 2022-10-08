import React, { useContext } from "react";
import classNames from "classnames/bind";
import { AuthContext } from "~/Context/AuthProvider";
import styles from "./UserInfo.module.scss";
import Submenu from "~/layouts/components/Submenu";
import { auth } from "~/firebase/config";
import Tippy from "@tippyjs/react/headless";

const SIGN_OUT = {
  width: "100px",
  height: "auto",
  padding: '10px',
  backgroundColor: "#a0a3a7",
  color: "#ffffff",
  textTransform: 'uppercase',
  textAlign: 'center'
}

const cx = classNames.bind(styles);
function UserInfo() {
  const renderItem = () => {

    return (
      <div style={SIGN_OUT} onClick={handleClick}>Sign out</div>
    )
  }
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);
  const handleClick = () => {
    auth.signOut();
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <ul className={cx("user-info")}>
      <img src={photoURL} className={cx("avatar")} />
      <li>{photoURL ? "" : displayName?.charAt(0).toUpperCase()}</li>
      <Tippy
        interactive
        placement="left"
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            {renderItem()}
          </div>
        )}
      >
        <li className={cx("user-name")}>{displayName}</li>
      </Tippy>
    </ul>
  );
}

export default UserInfo;
