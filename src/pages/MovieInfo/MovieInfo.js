import React from "react";
import classNames from "classnames/bind";
import styles from "./MovieInfo.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import MovieItem from "./MovieItem";
import { useParams } from "react-router-dom";
import { useFirestore }  from "~/hooks";
import BoxPromo from "~/components/BoxPromo";
import ColShowing from "~/components/ColShowing/ColShowing";

const cx = classNames.bind(styles);
function Buy() {
  const movies = useFirestore("films");
  const params = useParams();
  const movie = movies.find(
    (item) => params.buyticketId === item.vnTit.toString()
  );

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col lg={8} md={8} sm={12} xs={12} className={cx("movie-tab-left")}>
          {movie && (
            <MovieItem
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
              trailerUrl={movie.trailer}
              content={movie.content}
            />
          )}
          
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
