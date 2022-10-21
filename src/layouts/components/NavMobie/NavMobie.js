import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./NavMobie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../Search";
import FormLogIn from "~/components/FormLogIn";
import ToggleLogIn from "../ToggleLogIn";
import DropdownMenu from "../DropdownMobie";

const cx = classNames.bind(styles);
function NavMobie({ onClick }) {
  const [libActive, setLibActive] = useState("nav-mobie");
  const handleClick = () => {
    setLibActive(libActive === "nav-mobie" ? "sed-nav-mobie" : "nav-mobie");
  };
  return (
    <Container fluid className={cx("container")}>
      <Row className={cx("nav-mobie")}>
        <div className={cx("logo-mobie")}>
          <Link to="/">
            <img
              alt="logo"
              src="https://www.galaxycine.vn/website/images/galaxy-logo-mobile.png"
            />
          </Link>
        </div>
        <div className={cx("secondary-nav-wrapper")}>
          <ul className={cx("secondary-nav")}>
            <ToggleLogIn onClick={onClick} />
            <li className={cx("btn-close-mobie")} onClick={handleClick}>
              <span></span><span></span><span></span>
            </li>
          </ul>
        </div>
      </Row>
      <Row>
        <div className={cx("sed-nav-mobie")}
          style={ libActive === "sed-nav-mobie" ? { display: "block" }: { display: "none" }}>
          <li className={cx("x-close")}>
            <FontAwesomeIcon icon={faClose} onClick={() => setLibActive("nav-mobie")}/>
          </li>
          <Search />
          <DropdownMenu />
        </div>
      </Row>
    </Container>
  );
}
export default NavMobie;

