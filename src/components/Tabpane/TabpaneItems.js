import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { Row, Col } from "react-bootstrap";
import ArtImg from "../ArticleImg";
import styles from "./Tabpane.module.scss";
const cx = classNames.bind(styles);

function TabpaneItems({ items }) {
  let columns = [];
  items.forEach((movie, i) => {
    if ((i + 1) % 4 === 0) { columns.push(
      <Col key={i} lg={4} md={4} sm={6} xs={6}>
        <ArtImg  
          md btn
          rate={movie.rate}
          children="MUA VÉ"
          to={`/buyticket/${movie.vnTit.toString()}`}
          url={process.env.PUBLIC_URL + `/img/${movie.tabpaneUrl}`}
        />
        <h3 className={cx("vnTit")}>{movie.vnTit}</h3>
        <h3 className={cx("enTit")}>{movie.enTit}</h3>
      </Col>  
    )} else { columns.push(
      <Col lg={4} md={4} sm={6} xs={6} key={i}>
        <ArtImg 
          md btn
          rate={movie.rate}
          children="MUA VÉ"
          to={`/buyticket/${movie.vnTit}`}
          url={process.env.PUBLIC_URL + `/img/${movie.tabpaneUrl}`}
        />
        <h3 className={cx("vnTit")}>{movie.vnTit}</h3>
        <h3 className={cx("enTit")}>{movie.enTit}</h3>
      </Col>
    )}});
  return (
  <Row style={{width: "100%"}}>
    {columns}
  </Row>
)}

TabpaneItems.propTypes = {
  items: PropTypes.array.isRequired
}
export default TabpaneItems;
