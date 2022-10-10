import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./Ticket.module.scss";
import { useFirestore }  from "~/hooks";
import { db } from "~/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const cx = classNames.bind(styles);
export default function CineGroup() {
  const cinema = useFirestore("cinema");
  const [films, setFilms] = useState([]);
  const [days, setDays] = useState([]);
  const [items, setItem] = useState({});

  const pickCinemas = (id) => {
    onSnapshot(collection(db, `cinema/${id}/films`), (snap) => {
      const cinemas = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFilms(cinemas);
    });
  };
  const pickSession = (film) => {
    const keysTime = Object.keys(film.day);
    setDays(keysTime);
    setItem(film.day);
  };
  return (
    <Row>
      <Col lg={4} md={4} sm={12} xs={12}>
        <div className={cx("panel")}>
          <div className={cx("panel-heading")}>
            <h4 className={cx("panel-title")}>Chọn rạp</h4>
          </div>
          {cinema.map((cine, index) => (
            <ul key={index} className={cx("list-group")}>
              <li className={cx("movie-items")}
                onClick={() => pickCinemas(cine.id)}
              >{cine.id}
              </li>
            </ul>
          ))}
        </div>
      </Col>
      <Col lg={4} md={4} sm={12} xs={12}>
        <div className={cx("panel-default")}>
          <div className={cx("panel-heading")}>
            <h4 className={cx("panel-title")}>Chọn phim</h4>
          </div>
          {films.map((film, index) => (
            <ul key={index} className={cx("list-group")}>
              <li onClick={() => pickSession(film)}
                className={cx("movie-items")}>
                <a className={cx("list-group-item-movie")}>
                  <div className={cx("showtimes-row")}>
                    <img src={process.env.PUBLIC_URL + `/img/${film.src}`} />
                    <div className={cx("title-movie")}>
                      <p className={cx("vn-title")}>{film.vnTit}</p>
                      <p className={cx("en-title")}>{film.enTit}</p>
                    </div>
                    {film.rate && (
                      <span className={cx("rate")}>{film.rate}</span>
                    )}
                  </div>
                </a>
              </li>
            </ul>
          ))}
        </div>
      </Col>
      <Col lg={4} md={4} sm={12} xs={12}>
        <div className={cx("panel")}>
          <div className={cx("panel-heading")}>
            <h4 className={cx("panel-title")}>Chọn suất</h4>
          </div>
          <ul className={cx("list-group")}>
            <li className={cx("movie-items", "session")}>
              {days && days.map((day, index) => (
              <span key={index} 
                style={{ display: "block" }}
                className={cx("session-day")}
              >{day}
                <ul className={cx("session-group")}>
                  {items[day].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </span>
              ))}
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}
