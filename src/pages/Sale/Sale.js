import React from "react";
import classNames from "classnames/bind";
import styles from "./Sale.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Button from "~/components/Button";
import TitleLine from "~/components/TitleLine";
import { useFirestore } from "~/hooks";
import ColShowing from "~/components/ColShowing/ColShowing";
import QuickBoxTicket from "~/components/QuickBoxTicket";
import { Wrapper } from "~/components/Wrapper";
import SaleItems from "~/components/Sale/SaleItems";

const cx = classNames.bind(styles);
function Sale() {
  const sales = useFirestore("sales");
  const params = useParams();
  const itemSale = sales.find(
    (item) => params.saleId === item.content.toString()
  );
  const showItems = sales.filter((item, index) => {
    if (index < 4) {
      return sales[index];
    }
  });
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row className={cx("block-wrapper")}>
          <Col md={8} sm={8} xs={12}>
            <div className={cx("content-wrapper")}>
              {itemSale && (
                <h1 className={cx("content-title")}>{itemSale.title}</h1>
              )}
              <ul style={{ display: "flex" }}>
                <li className={cx("likes")}>
                  <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                  Thích 50
                </li>
                <li className={cx("likes")}>Chia sẻ</li>
                <li className={cx("views")}>
                  <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                  235
                </li>
                <li className={cx("star")}>
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                  0.0/10 (0)
                </li>
                <li className={cx("btn-rating")}>
                  <Button md colorBg>
                    Đánh giá
                  </Button>
                </li>
              </ul>
            </div>
            <div className={cx("content-img")}>
              {itemSale && (
                <img alt="saleImg" src={process.env.PUBLIC_URL + `/promotion/${itemSale.src}`}
                />
              )}
            </div>
            <section id="relatedpost">
              <TitleLine>Bài viết liên quan</TitleLine>
              <Row className={cx("ralated")}>
                <ul className={cx("related-post")}>
                  {sales && sales.map((item, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={faArrowRight} />
                      <a href="#">{item.content}</a>
                    </li>
                  ))}
                </ul>
              </Row>
            </section>
            <section id="relatedpost">
              <TitleLine>Khuyến mãi khác</TitleLine>
              <div className={cx("sale-related-items")}>
                <SaleItems items={showItems} folder="/promotion" />
              </div>
            </section>
          </Col>
          <Col md={4} sm={4} xs={12}>
            <div className={cx("box-ticket")}>
              <Wrapper bg000>
                <QuickBoxTicket />
              </Wrapper>
            </div>
            <section id="movieSidebar" style={{ marginTop: "50px" }}>
              <ColShowing />
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Sale;
