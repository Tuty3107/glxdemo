import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./NavMobie.module.scss";
import Submenu from "../Submenu";

const cx = classNames.bind(styles);
const listItems = [
  {
    id: 0,
    to: "/ticket",
    content: "Mua vé",
  },
  {
    id: 1,
    to: "/",
    content: "Phim",
  },
  {
    id: 2,
    to: "/",
    content: "Góc điện ảnh",
  },
  {
    id: 3,
    to: "/",
    content: "Sự kiện",
  },
  {
    id: 4,
    to: "/",
    content: "Rạp/Giá vé",
  },
  {
    id: 5,
    to: "/",
    content: "Hỗ trợ",
  },
  {
    id: 6,
    to: "/",
    content: "Thành viên",
  },
];
const subnav1 = [
    {
        id: 0,
        content: "Phim đang chiếu",
        to:'/'
    },
    {
        id: 0,
        content: "Phim sắp chiếu",
        to:'/'
    },
]
function LibItems({ onClick }) {
  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id} onClick={onClick}>
          <Link to={item.to}>{item.content}</Link>
        </li>
      ))}
    </ul>
  );
}

export default LibItems;

{
  /*
  <li>
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
      
      <li className={cx("mbsubnav-3")}>
        Sự kiện
        <FontAwesomeIcon icon={faAngleDown} />
        <ul className={cx("mbsubnav-3-item")}>
          <li>Ưu đãi</li>
          <li>Phim hay tháng</li>
        </ul> 
      </li>
      <li className={cx("mbsubnav-1")}>
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
        Góc điện ảnh
        <FontAwesomeIcon icon={faAngleDown} />
        <ul className={cx("mbsubnav-2-item")}>
          <li onClick={() => setLibActive("nav-mobie")}>
            <Link to="/movietype">Thể loại phim</Link>
          </li>
          <li onClick={() => setLibActive("nav-mobie")}>Diễn viên</li>
          <li onClick={() => setLibActive("nav-mobie")}>Đạo diễn</li>
          <li onClick={() => setLibActive("nav-mobie")}>Bình luận phim</li>
          <li onClick={() => setLibActive("nav-mobie")}>Blog điện ảnh</li>
        </ul>
      </li>
      <li className={cx("mbsubnav-3")}>
        Sự kiện
        <FontAwesomeIcon icon={faAngleDown} />
        <ul className={cx("mbsubnav-3-item")}>
          <li>Ưu đãi</li>
          <li>Phim hay tháng</li>
        </ul> 
    </li> */
}
