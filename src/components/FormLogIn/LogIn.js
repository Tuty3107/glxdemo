import React, { useContext } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Button from "../Button";
import styles from "./FormLogIn.module.scss";
import { LoginContext } from "~/Context/LoginProvider";
import Field from "./Field";

const cx = classNames.bind(styles);
function LogIn({ onClick }) {
  const handleFbLogin = useContext(LoginContext);
  
  return (
    <>
      <p className={cx("text-heading")}>
        Vui lòng đăng nhập trước khi mua vé để tích lũy điểm, cơ hội nhận thêm
        nhiều ưu đãi từ chương trình thành viên Galaxy Cinema
      </p>
      <form>
        <Field placeholder="Email" type="email" />
        <Field placeholder="Mật khẩu" type="password" />
        <div className={cx("login-remember")}>
          <a>Quên mật khẩu?</a>
        </div>
        <div onClick={handleFbLogin} className={cx("icon-fb")}>
          <FontAwesomeIcon icon={faFacebook} className={cx("icon")} />
          Log in with Facebook
        </div>
        <div className={cx("icon-fb")} onClick={onClick}>
            ĐĂNG NHẬP
        </div>
      </form>
    </>
  );
}
export default LogIn;
