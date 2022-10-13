import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MovieInfo.module.scss";
import { Row, Col } from "react-bootstrap";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTimes,
  faThumbsUp,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faShareSquare } from "@fortawesome/free-regular-svg-icons";
import TitleLine from "~/components/TitleLine";
import TrailerFilm from "./TrailerFilm";

const cx = classNames.bind(styles);
function MovieItem({
  url,
  enTit,
  vnTit,
  rate,
  producer,
  country,
  director,
  type,
  actor,
  dayshow,
  trailerUrl,
  content
}) {
  const [show, setShow] = useState(false);
  const trailerDisplay = () => {setShow(true)};

  return (
    <>
      <Row>
        <TrailerFilm 
          show={show}  
          onHide={() => setShow(false)} 
          src={trailerUrl} 
          title={vnTit}
          />
        <Col lg={6}>
          <div className={cx("poster")}>
            <img src={process.env.PUBLIC_URL + `/schedule/${url}`} />
            <div className={cx("play-bt")} onClick={trailerDisplay}>
              <FontAwesomeIcon icon={faPlayCircle} />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className={cx("details")}>
            <h2 className={cx("details-title", "upper-text")}>{enTit}</h2>
            <h2 className={cx("details-title", "vn-upper-text")}>{vnTit}</h2>
            <div className={cx("details-rating")}>
              <div className={cx("activeRating")}>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className={cx("reating-movie-detail")}>
                <strong>8.6</strong>
                <span> /10</span>
              </div>
              <Button small colorBg>
                Rating
              </Button>
            </div>
            <div className={cx("details-rating")}>
              {rate && <Button colorBg>{rate}</Button>}
              <span className={cx("icon-times-left")}>
                <FontAwesomeIcon icon={faTimes} />
                105 times
              </span>
              <span className={cx("like")}>
                <FontAwesomeIcon icon={faThumbsUp} />
                <FontAwesomeIcon icon={faShareSquare} />
              </span>
            </div>
            <div className={cx("details-info")}>
              <label className={cx("producer")}>
                Producer:
                <a className={cx("details-info-right")}>{producer}</a>
              </label>
              <label className={cx("country")}>
                Country:
                <a className={cx("details-info-right")}>{country}</a>
              </label>
              <label className={cx("director")}>
                Director:
                <a className={cx("details-info-right")}>{director}</a>
              </label>
              <label className={cx("type")}>
                Type:
                <a className={cx("details-info-right")}>{type}</a>
              </label>
              <label className={cx("actor")}>
                Actor:
                <a className={cx("details-info-right")}>{actor}</a>
              </label>
              <label className={cx("dayshow")}>
                Ngày khởi chiếu:
                <a className={cx("details-info-right")}>{dayshow}</a>
              </label>
            </div>
          </div>
        </Col>
      </Row>
      <Row className={cx("movie-content")}>
        <Col lg={12}>
          <div className={cx("content-text")}>
            <section id="info">
              <TitleLine>Movie Content</TitleLine>
              <p>{content}</p>
              <p>
                Phim mới
                <strong> {vnTit} </strong>
                ra mat cac rap tu ngay {dayshow}
              </p>
            </section>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MovieItem;
