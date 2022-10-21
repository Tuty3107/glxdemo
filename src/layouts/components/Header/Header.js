import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Navbar1 from "../Navbar";
import NavMobie from "../NavMobie";
import FormLogIn from "~/components/FormLogIn";
import Search from "../Search/Search";
import ToggleLogIn from "../ToggleLogIn";

const cx = classNames.bind(styles);
function Header() {
  const [show, setShow] = useState(true);

  return (
    <div className={cx("wrapper")}>
      <FormLogIn show={show} onHide={() => setShow(false)} />
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img alt="" src="https://www.galaxycine.vn/website/images/galaxy-logo.png" />
          </Link>
        </div>
        <Search />
        <ul className={cx("primary-nav-wrapper")}>
          <ToggleLogIn onClick={() =>setShow(true)} />
          <li className={cx("languages")}>
            <a className={cx("VN")}>VN</a>
            <span>|</span>
            <a className={cx("EN")}>EN</a>
          </li>
        </ul>
      </div>
      <div className={cx("navbar")}>
        <Navbar1 />
      </div>
      <div className={cx("navbar-mobie")}>
        <NavMobie onClick={() => setShow(true)} />
      </div>
    </div>
  );
}

export default Header;
