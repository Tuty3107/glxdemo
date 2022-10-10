import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./BlogMovie.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import ArtImg from "../ArticleImg";

const cx = classNames.bind(styles);
function BlogBox({ src, preview, content, to }) {
  return (
    <div className={cx("blog")} style={{marginBottom: "20px"}}>
      <div className={cx("blog-img")}>
        <ArtImg xs url={process.env.PUBLIC_URL + `/blogImg/${src}`} />
      </div>
      <div className={cx("blog-descript")}>
        <h5>
          <Link to={to}>{preview}</Link>
        </h5>
        <ul>
          <li className={cx("likes")}>
            <FontAwesomeIcon icon={faThumbsUp} />
            Thích 50
          </li>
          <li className={cx("views")}>
            <FontAwesomeIcon icon={faEye} />
            235
          </li>
          <li className={cx("star")}>
            <FontAwesomeIcon icon={faStar} />
            0.0/10 (0)
          </li>
        </ul>
        <div className={cx("blog-content")}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

BlogBox.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string,
  content: PropTypes.string,
  to: PropTypes.string.isRequired
}
export default BlogBox;
