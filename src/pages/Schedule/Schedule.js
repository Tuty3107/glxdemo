import React from "react";
import classNames from "classnames/bind";
import styles from "./Schedule.module.scss";
import { Container } from "react-bootstrap";
import ContentCeo from "~/layouts/components/ContentCeo";
import TabChange from "~/components/TabChange/TabChange";
import { useFirestore }  from "~/hooks";
import SaleItems from "~/components/Sale/SaleItems";

const cx = classNames.bind(styles);
function Schedule() {
  const movies = useFirestore("films");
  let coming = []
  let showing = []
  movies.map(movie => {
    if(movie.coming === true) {
      coming.push(movie)
    } else if(movie.coming === false){
      showing.push(movie)
    }
  })
  return (
    <div className={cx("wrapper")}>
      <Container style={{ marginTop: "50px" }}>
        <div className={cx("movie-box")}>
          <TabChange
            text1={"Phim đang chiếu"}
            text3={"Phim sắp chiếu"}
            content1={<SaleItems items={coming} folder={"schedule"}/>}
            content2={<SaleItems items={showing} folder={"schedule"}/>}
          />
        </div>
        <ContentCeo></ContentCeo>
      </Container>
    </div>
  );
}

export default Schedule;
