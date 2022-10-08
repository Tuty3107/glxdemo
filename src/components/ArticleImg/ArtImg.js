import React from "react";
import classNames from "classnames/bind";
import styles from "./ArtImg.module.scss";
import Button from "../Button/Button";

const cx = classNames.bind(styles);
function ArtImg({
  xs = false, sm = false, md = false, lg = false, xl = false,
  blog=false,
  url, rate, btn, to, content, title,
  children,
}) {
  const classes = cx("artical-movie", { xs, sm, md, lg, xl, blog });

  return (
    <article className={classes} style={{ backgroundImage: `url(${url})` }}>
      <figure className={cx("overlay")}>
        {title && <div className={cx("title")}>{title}</div>}
        {content && <div className={cx("content")}>{content}</div>}
        {rate && (
          <div className={cx("rate")}>
            <span>{rate}</span>
          </div>
        )}
        {btn && (
          <Button to={to} primary medium>
            {children}
          </Button>
        )}
      </figure>
    </article>
  );
}

export default ArtImg;
