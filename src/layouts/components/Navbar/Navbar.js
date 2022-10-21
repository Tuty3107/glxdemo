import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useFirestore }  from "~/hooks";
import ArtImg from "~/components/ArticleImg/ArtImg";
import Submenu from "../Submenu";

const cx = classNames.bind(styles);
function Navbar1() {
  const subnav1 = useFirestore("/subnavCategory/GZJzIvsORd63BiqFaZei/subnav1");
  const subnav2 = useFirestore("/subnavCategory/GZJzIvsORd63BiqFaZei/subnav2");
  const movies = useFirestore("films");
  let coming = [];
  let showing = [];
  movies.map((movie) => {
    if (movie.coming === true) {
      coming.push(movie);
    } else if (movie.coming === false) {
      showing.push(movie);
    }
  });
  const comingItem = coming.filter((item, index) => {
    if (index < 4) {
      return coming[index];
    }
  });
  const showingItem = showing.filter((item, index) => {
    if (index < 4) {
      return showing[index];
    }
  });
  return (
    <div className={cx("nav-wrapper")}>
      <div className={cx("nav-container")}>
        <ul className={cx("navbar")}>
          <li className={cx("primary-nav-tit")}>
            <Link to="/ticket">Mua vé</Link>
          </li>
          <li className={cx("primary-nav-tit", "subnav")}>
            Phim
            <FontAwesomeIcon icon={faAngleDown} />
            <div className={cx("submenu-movie")}>
              <Link to="/schedule" className={cx("submenu-title")}>
                <h3>Phim đang chiếu</h3>
              </Link>
              <div className={cx("submenu-group")}>
                {showingItem.map((movie, idx) => (
                  <ArtImg
                    sm
                    btn
                    key={idx}
                    rate={movie.rate}
                    children="MUA VÉ"
                    to={`/buyticket/${movie.vnTit.toString()}`}
                    url={process.env.PUBLIC_URL + `/img/${movie.tabpaneUrl}`}
                  />
                ))}
              </div>
              <Link to="/schedule" className={cx("submenu-title")}>
                <h3>Phim sắp chiếu</h3>
              </Link>
              <div className={cx("submenu-group")}>
                {comingItem.map((movie, idx) => (
                  <ArtImg
                    sm
                    btn
                    key={idx}
                    rate={movie.rate}
                    children="MUA VÉ"
                    to={`/buyticket/${movie.vnTit.toString()}`}
                    url={process.env.PUBLIC_URL + `/img/${movie.tabpaneUrl}`}
                  />
                ))}
              </div>
            </div>
          </li>
          {subnav1 && (
            <Submenu items={subnav1}>
              <li className={cx("primary-nav-tit")}>
                Góc điện ảnh
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </Submenu>
          )}
          {subnav2 && (
            <Submenu items={subnav2}>
              <li className={cx("primary-nav-tit")}>
                Sự kiện
                <FontAwesomeIcon icon={faAngleDown} />
              </li>
            </Submenu>
          )}
          <li className={cx("primary-nav-tit")}>Rạp/Giá vé</li>
          <li className={cx("primary-nav-tit")}>Hỗ trợ</li>
          <li className={cx("primary-nav-tit")}>Thành viên</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar1;
