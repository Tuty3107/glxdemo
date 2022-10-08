import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo";
import Navbar1 from "../Navbar";
import NavMobie from "../NavMobie";
import FormLogIn from "~/components/FormLogIn";
import Search from "../Search/Search";

const cx = classNames.bind(styles);
function Header() {
  const user = localStorage.getItem("user");
  const [show, setShow] = useState(false);

  //Show-Hide Modal
  React.useEffect(() => {
    if (sessionStorage.getItem("registered")) {
      setShow(false);
      if (!user) {
        const handleReload = window.addEventListener("load", () => {
          sessionStorage.removeItem("registered");
          setShow(true);
        });

        return () => {
          window.removeEventListener("reload", handleReload);
        };
      }
    } else if (!sessionStorage.getItem("registered")) {
      setShow(true);
      sessionStorage.setItem("registered", "true");
    }
  }, []);

  return (
    <div className={cx("wrapper")}>
      <FormLogIn show={show} onHide={() => setShow(false)} />
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" />
          </Link>
        </div>
        <Search />
        <div className={cx("primary-nav-wrapper")}>
          <ul>
            {user ? (
              <UserInfo />
            ) : (
              <li className={cx("login")} onClick={() => setShow(true)}>
                <FontAwesomeIcon icon={faUser} />
                Đăng nhập
              </li>
            )}
            <li className={cx("languages")}>
              <a className={cx("VN")}>VN</a>
              <span>|</span>
              <a className={cx("EN")}>EN</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("navbar")}>
        <Navbar1 />
      </div>
      <div className={cx("navbar-mobie")}>
        <NavMobie />
      </div>
    </div>
  );
}

export default Header;
