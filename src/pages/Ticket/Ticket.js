import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Ticket.module.scss";
import {Container, Row, Col} from "react-bootstrap";

import {films} from "./ticketData";

const cx = classNames.bind(styles);

function Ticket() {
  const cinemaItemsStorage = JSON.parse(localStorage.getItem("cinemaItems"));
  
  const [ tabActive, setTabActive ] = useState("films-line");
  const [ name, setName ] = useState(["Vui lòng chọn rạp"]);
  const [ session, setSession ] = useState([]);
  const [ movieTime, setMovieTime ] = useState([]);

  useEffect(() => {
    setTabActive(tabActive)
  },[tabActive])

  const handleClick = (item) => {
    const cinemaItem = item.cinema;
    const cineName = cinemaItem.map(item => {
      return item.name
    })
    setName(cineName)

    const cinemaItemJson = JSON.stringify(cinemaItem);
    localStorage.setItem("cinemaItems", cinemaItemJson)
  }

  const pickDaytime = (id) => {
    const session = cinemaItemsStorage.map(item => {
      return item.session
    })
    const daytime = session[id].map(item => {
      return item.time
    })
    setSession(session[id])
    setMovieTime(daytime[id])
  }
  return (
    <Container style={{marginTop: '100px',marginBottom: '100px'}}>
      <Row className={cx("tab-movie-line")}>
        <ul className={cx("movie-tab-line")}>
            <li className={cx("movie-tab-line-item", "films-line")}
                onClick={() =>setTabActive("films-line")}>
              Theo phim 
              <span className={cx("movie-tab-active")}
                    style={tabActive === "films-line" ? {display:"block"} : {display:"none"}}></span>
            </li>
            <li className={cx("movie-tab-line-item", "cinema-line")}
                onClick={() =>setTabActive("cinema-line")}>
              Theo rạp
              <span className={cx("movie-tab-active")}
                    style={tabActive === "cinema-line" ? {display:"block"} : {display:"none"}}></span>
            </li>
        </ul>
      </Row>
      {/*Showtimes group*/}
      <Row>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className={cx("panel-default")}>
              <div className={cx("panel-heading")}>
                <h4 className={cx("panel-title")}>Chọn phim</h4>
              </div>
              <ul className={cx("list-group")}>
                {films.map((item, index) => (
                <li key={index} className={cx("movie-items")}
                    onClick={() => handleClick(item)}>
                  <a className={cx("list-group-item-movie")}>
                    <div className={cx("showtimes-row")}>
                      <img src={item.src}></img>
                      <div className={cx("title-movie")}>
                        <p className={cx("vn-title")}>{item.VNtitle}</p>
                        <p className={cx("en-title")}>{item.ENtitle}</p>
                      </div>
                      {item.rate && <span className={cx("rate")}>{item.rate}</span>}
                    </div>
                  </a>
                </li>))}
              </ul>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className={cx("panel")}>
              <div className={cx("panel-heading")}>
                <h4 className={cx("panel-title")}>Chọn rạp</h4>
              </div>
              <ul className={cx("list-group")}>
              {name.map((item, index) => (
                <li key={index} className={cx("movie-items","cinema")}
                  onClick={() => pickDaytime(index)}
                >{item}
                </li>))}
              </ul>
            </div>
          </Col>
          <Col lg={4} md={4}>
          <div className={cx("panel")}>
              <div className={cx("panel-heading")}>
                <h4 className={cx("panel-title")}>Chọn suất</h4>
              </div>
              <ul className={cx("list-group")}>
                {session.map((item, index) =>(
                <li className={cx("movie-items","session")} key={index}>
                  <span className={cx("session-day")}>{item.day}</span>
                  <Row>
                    <Col lg={4}>{item.others}</Col>
                    <Col lg={8}>
                    <ul className={cx("session-group")}>
                      {movieTime && movieTime.map((item, index) => (
                        <li key={index} className={cx("session-time")}>{item}</li>
                      ))}     
                    </ul>
                    </Col>
                  </Row>
                </li>))}
              </ul>
            </div>
          </Col>
      </Row>
    </Container>
  )
}

export default Ticket