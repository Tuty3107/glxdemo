import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Slider from "~/components/Slider";
import Button from "~/components/Button";
import TabPane from "~/components/Tabpane";
import BlogMovie from "~/components/BlogMoive";
import Sale from "~/components/Sale";
import ContentCeo from '~/components/ContentCeo';
import SignIn from '~/components/SignIn';


const cx = classNames.bind(styles);

function Home() {
  return (
  <div>
    <SignIn></SignIn>
    <Slider></Slider>
    <Container style={{marginBottom: "100px",marginTop: "100px"}}>    
      {/*Movie*/}
      <Row style={{marginBottom: "100px"}}>
        <Col lg={12}>
          <div className={cx("tab-movie")}>
            <div className={cx("hotnews")}>
                <FontAwesomeIcon icon={faFireAlt}></FontAwesomeIcon>
                <a href="">Thor Tình Yêu Và Sấm Sét: Thần Sấm Sẽ Bị Thay Thế</a>
            </div>                                 
            <TabPane></TabPane>
              <Row>
                <Col lg={12} className={cx("moreInfo-btn")}>
                  <Link to="/schedule">
                    <Button xl colorBorder>
                      Xem thêm
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  
                    </Button>
                  </Link>                         
                </Col>
              </Row>                     
          </div>
        </Col>
      </Row>
      {/*Movie Blog*/}
      <Row className={cx("contentMovies")} style={{marginBottom: "50px",marginTop: "100px"}}>
        <section className={cx("comment-blog")}>
          <BlogMovie></BlogMovie>
        </section>
      </Row>
      {/*Sale Blog*/}
      <Row style={{marginBottom: "50px",marginTop: "100px"}}>
        <Sale></Sale>
      </Row>
      {/*Content ceo*/}
      <Row style={{marginBottom: "50px",marginTop: "100px"}}>
        <ContentCeo></ContentCeo>
      </Row>
    </Container>
</div>
  )
}

export default Home