import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Buyticket.module.scss";
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
function Buyticket({
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
  src
}) {
  const [show, setShow] = useState(false);
  const trailerDisplay = () => {setShow(true)};

  return (
    <>
      <Row>
        <TrailerFilm 
          show={show}  
          onHide={() => setShow(false)} 
          src={src} 
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
              <p>
                Mẹ qua đời, Evie phát hiện ra mình có một người em họ đã thất
                lạc từ lâu. Anh chàng mời cô đến dự đám cưới của gia đình ở vùng
                nông thôn hẻo lánh của nước Anh. Tại đây, cô nàng bất ngờ khi
                phát hiện ra gia tộc mình vô cùng giàu có, đồng thời thấy có gì
                đó “sai sai” khi mọi người đều là da trắng.
              </p>
              <p>
                Theo thời gian, Evie dần trở có tình cảm với Walter (Thomas
                Doherty) - một chàng quý tộc điển trai. Thế nhưng, mọi thứ bỗng
                biến thành nỗi kinh hoàng khi các thành viên gia đình bất ngờ
                sát hại một người giúp việc và bắt đầu buổi tiệc máu ngay trong
                lễ cưới. Không những thế, cô dâu và chú rể cũng không hề xuất
                hiện. Hóa ra, Evie đã rơi vào một hang ổ ma cà rồng và cô chính
                là cô dâu mới trong đại gia tộc khát máu này.
              </p>
              <p>
                Phim mooi
                <strong>Loi moi den tu dia nguc</strong>
                ra mat cac rap tu ngay 22/08/2022
              </p>
              <a></a>
            </section>
          </div>
        </Col>
      </Row>
      {/* <Row className={cx("movieShowtime")}>
        <TitleLine>Lịch chiếu</TitleLine>
        <Row className={cx("showtime")}>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
        </Row>
      </Row> */}
    </>
  );
}

export default Buyticket;
