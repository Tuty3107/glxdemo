import React from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import ArtImg from "~/components/ArticleImg/ArtImg";
import { useFirestore } from "~/hooks";

const cx = classNames.bind(styles);

function Dropdown({dropdown}) {
  const movies = useFirestore("films");
  const subMovies = React.useRef(null);
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
  React.useEffect(() => {
    if(dropdown === true) {
      subMovies.current.style.display = "block" 
    } else {
      subMovies.current.style.display = "none" 
    }
  },[dropdown])
  
  return (
    <div ref={subMovies} className={cx("submenu-movie")}>
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
  );
}

export default Dropdown;
