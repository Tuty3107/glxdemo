import React, { useContext } from "react";
import classNames from "classnames/bind";
import { AuthContext } from "~/Context/AuthProvider";
import styles from "./UserInfo.module.scss";
import { auth } from "~/firebase/config";
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);
function UserInfo() {
  const renderItem = () => {
    return (
      <div className={cx("signOut")} onClick={handleClick}>
        Sign out
      </div>
    );
  };
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);
  const handleClick = () => {
    auth.signOut();
    localStorage.removeItem("userSignIn");
    window.location.reload();
  };
  return (
    <ul className={cx("user-info")}>
      <img src={photoURL} className={cx("avatar")} />
      <li style={{color: '#333'}}>{photoURL ? "" : displayName?.charAt(0).toUpperCase()}</li>
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
