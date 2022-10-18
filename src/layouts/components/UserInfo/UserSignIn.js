import React, { useContext } from "react";
import classNames from "classnames/bind";
import { auth } from "~/firebase/config";
import Tippy from "@tippyjs/react/headless";
import styles from "./UserInfo.module.scss";
import { EmailPwContext } from "~/Context/EmailPwProvider";

const cx = classNames.bind(styles);
function UserSignIn() {
  const renderItem = () => {
    return (
      <div className={cx("signOut")} onClick={handleClick}>
        Sign out
      </div>
    );
  };
  const {
    userSignIn: { email },
  } = useContext(EmailPwContext);
  const handleClick = () => {
    auth.signOut();
    localStorage.removeItem("userSignIn")
  };

  return (
    <ul className={cx("user-info")}>
      <img src="https://i.pinimg.com/564x/6b/73/d2/6b73d2ed3b0da7e9c836ee66ca06f229.jpg" className={cx("avatar")} />
      <Tippy
        interactive
        placement="left"
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            {renderItem()}
          </div>
        )}
      >
        <li className={cx("user-name")}>{email.charAt(0).toUpperCase()}</li>
      </Tippy>
    </ul>
  );
}

export default UserSignIn;
