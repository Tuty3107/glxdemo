import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "~/layouts/components/Slider";
import Button from "~/components/Button";
import TabPane from "~/components/Tabpane";
import BlogMovie from "~/components/BlogMoive";
import Sale from "~/components/Sale";
import ContentCeo from "~/layouts/components/ContentCeo";

const cx = classNames.bind(styles);
function Home() {

  return (
    <>
      <Slider />
      <Container style={{ marginBottom: "100px", marginTop: "50px" }}>
        <Row style={{ marginBottom: "100px" }}>
          <Col lg={12}>
            <div className={cx("tab-movie")}>
              <div className={cx("hotnews")}>
                <FontAwesomeIcon icon={faFireAlt}></FontAwesomeIcon>
                <a href="">Thor Tình Yêu Và Sấm Sét: Thần Sấm Sẽ Bị Thay Thế</a>
              </div>
              <TabPane />
              <div className={cx("moreInfo-btn")}>
                <Button xl colorBg>
                  <Link to="/schedule">
                    Xem thêm
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </Link>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={cx("contentMovies")} style={{ marginTop: "100px" }}>
          <section className={cx("comment-blog")}>
            <BlogMovie />
          </section>
        </Row>
        <Row style={{ marginBottom: "50px", marginTop: "100px" }}>
          <Sale />
        </Row>
        <Row style={{ marginBottom: "50px", marginTop: "100px" }}>
          <ContentCeo />
        </Row>
      </Container>
    </>
  );
}

export default Home;
