import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./NavMobie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAngleDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../Search";

const cx = classNames.bind(styles);
function NavMobie() {
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
            <li>
              <a className={cx("logoLink")} href="#">
                <FontAwesomeIcon icon={faUser} />
                Đăng nhập
              </a>
            </li>
            <li className={cx("btn-close-mobie")} onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>
      </Row>
      <Row>
        <div
          className={cx("sed-nav-mobie")}
          style={
            libActive === "sed-nav-mobie"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <FontAwesomeIcon
            icon={faClose}
            className={cx("x-close")}
            onClick={() => setLibActive("nav-mobie")}
          />
          <div className={cx("nav-mobie-search")}>
            <Search />
          </div>
          <ul>
            <li onClick={() => setLibActive("nav-mobie")}>
              <Link to="/ticket">Mua vé</Link>
            </li>
            <li className={cx("mbsubnav-1")}>
              {" "}
              Phim
              <FontAwesomeIcon icon={faAngleDown} />
              <ul className={cx("mbsubnav-1-item")}>
                <li onClick={() => setLibActive("nav-mobie")}>
                  <Link to="/schedule">Phim đang chiếu</Link>
                </li>
                <li onClick={() => setLibActive("nav-mobie")}>
                  <Link to="/schedule"> Phim sắp chiếu</Link>
                </li>
              </ul>
            </li>
            <li className={cx("mbsubnav-2")}>
              {" "}
              Góc điện ảnh
              <FontAwesomeIcon icon={faAngleDown} />
              <ul className={cx("mbsubnav-2-item")}>
                <li onClick={() => setLibActive("nav-mobie")}>
                  <Link to="/movietype">Thể loại phim</Link>
                </li>
                <li onClick={() => setLibActive("nav-mobie")}>Diễn viên</li>
                <li onClick={() => setLibActive("nav-mobie")}>Đạo diễn</li>
                <li onClick={() => setLibActive("nav-mobie")}>
                  Bình luận phim
                </li>
                <li onClick={() => setLibActive("nav-mobie")}>Blog điện ảnh</li>
              </ul>
            </li>
            <li className={cx("mbsubnav-3")}>
              {" "}
              Sự kiện
              <FontAwesomeIcon icon={faAngleDown} />
              <ul className={cx("mbsubnav-3-item")}>
                <li>Ưu đãi</li>
                <li>Phim hay tháng</li>
              </ul>
            </li>
            <li>Rạp/Giá vé</li>
            <li>Hỗ trợ</li>
            <li>Thành viên</li>
          </ul>
        </div>
      </Row>
    </Container>
  );
}

export default NavMobie;
{
}
