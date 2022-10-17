import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useFirestore }  from "~/hooks";
import { db } from "~/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import classNames from "classnames/bind";
import styles from "./Ticket.module.scss";

const cx = classNames.bind(styles);
export default function MovieGroup() {
  const films = useFirestore("films");
  const [cine, setCine] = useState([]);
  const [days, setDays] = useState([]);
  const [items, setItem] = useState({});

  const pickCinemas = (film) => {
    setDays([])
    setItem({})
    onSnapshot(collection(db, `/films/${film.id}/cinema`), (snap) => {
      const cinemas = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCine(cinemas);
    });
  };

  
  const pickSession = (cine) => {
    const keysTime = Object.keys(cine.day);
    setDays(keysTime);
    setItem(cine.day);
  }

  return (
    <Row>
      <Col lg={4} md={4} sm={12} xs={12}>
        <div className={cx("panel-default")}>
          <div className={cx("panel-heading")}>
            <h4 className={cx("panel-title")}>Chọn phim</h4>
          </div>
          <ul className={cx("list-group")}>
            {films.map((film, index) => (
              <li key={index} className={cx("movie-items")}
                onClick={() => pickCinemas(film)}>
                <div className={cx("list-group-item-movie")}>
                  <div className={cx("showtimes-row")}>
                    <img alt="filmImg" src={process.env.PUBLIC_URL + `/img/${film.tabpaneUrl}`} />
                    <div className={cx("title-movie")}>
                      <p className={cx("vn-title")}>{film.vnTit}</p>
                      <p className={cx("en-title")}>{film.enTit}</p>
                    </div>
                    {film.rate && (
                      <span className={cx("rate")}>{film.rate}</span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col lg={4} md={4} sm={12} xs={12}>
        <div className={cx("panel")}>
          <div className={cx("panel-heading")}>
            <h4 className={cx("panel-title")}>Chọn rạp</h4>
          </div>
          <ul className={cx("list-group")}>
          {cine && cine.map((cine, index) => (
            <li key={index} className={cx("movie-items")}
              onClick={() => pickSession(cine)}
            >{cine.id}
            </li>
          ))}
          </ul>
        </div>
      </Col>
      <Col lg={4} md={4} sm={12} xs={12}>
        <div className={cx("panel")}>
          <div className={cx("panel-heading")}>
            <h4 className={cx("panel-title")}>Chọn suất</h4>
          </div>
          <ul className={cx("list-group")}>
            {days && days.map((day, index) => (
            <li key={index} className={cx("movie-items")}>
              <span className={cx("session-day")}>{day}</span>
              <ul className={cx("session-group")}>
                {items[day].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> 
            </li>
            ))}
          </ul>
        </div>
      </Col>
    </Row>
  );
}
