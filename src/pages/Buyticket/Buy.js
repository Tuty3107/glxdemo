import React, { useState, useSyncExternalStore } from "react";
import classNames from "classnames/bind";
import styles from "./Buyticket.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Buyticket from "./Buyticket";
import { useParams } from "react-router-dom";
import useFirestore from "~/hooks/useFirestore";
import BoxPromo from "~/components/BoxPromo";
import ColShowing from "~/components/ColShowing/ColShowing";
import TitleLine from "~/components/TitleLine";
import { db } from "~/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const cx = classNames.bind(styles);
function Buy() {
  const movies = useFirestore("films");
  const params = useParams();
  const [cine, setCine] = useState({});
  const movie = movies.find(
    (item) => params.buyticketId === item.vnTit.toString()
  );
  //let result = src.replace("watch?v=", "embed");
  // console.log(movie)
  // console.log(movie.id)
  // const cinemas = useFirestore(`films/${movie.id}/cinema`)
  // console.log(cinemas)
  // console.log(cinemas.id)
  // if (movie) {
  //   onSnapshot(collection(db, "films/L4WTDUlm9vbpAtY4zkup/cinema"), (snap) => {
  //     const cinemas = snap.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));

  //   });
  // } else {
  //   console.log("Nothing!!!");
  // }
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col lg={8} md={8} sm={12} xs={12} className={cx("movie-tab-left")}>
          {movie && (
            <Buyticket
              url={movie.scheduleUrl}
              enTit={movie.enTit}
              vnTit={movie.vnTit}
              rate={movie.rate}
              producer={movie.producer}
              country={movie.country}
              director={movie.director}
              type={movie.type}
              actor={movie.actor}
              dayshow={movie.dayshow}
              src={movie.trailerSrc}
            />
          )}
          <Row className={cx("movieShowtime")}>
            <TitleLine>Lịch chiếu</TitleLine>
            <Row className={cx("showtime")}>
              {/*cine && cine.map((cineName, idx) =>  (
                <div key={idx} className={cx("cineName")}>
                  {cineName}
                </div>

              ))*/}
            </Row>
          </Row>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12} className={cx("movie-tab-right")}>
          <BoxPromo />
          <ColShowing />
        </Col>
      </Row>
    </Container>
  );
}
export default Buy;
