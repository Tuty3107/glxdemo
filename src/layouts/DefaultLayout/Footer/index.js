import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import {Container,Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAppleAlt} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faYoutube, faAppStore } from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
        <Container fluid style={{backgroundColor:"#1a1a1a", padding:'50px 0'}}>
          <Container className={cx("footer-list")}>
            <Row>
                <Col lg={3} md={6} xs={6}>
                  <ul className={cx('list-unstyled')}>
                    <li>
                      <h1 className={cx("title")}>giới thiệu</h1>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} ></FontAwesomeIcon>
                          Về chúng tôi
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          Thỏa thuận sử dụng
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          Quy chế hoạt động
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          Chính sách bảo mật
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={6} xs={6}>
                <ul className={cx('list-unstyled')}>
                    <li>
                      <h1 className={cx("title")}>Góc điện ảnh</h1>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} ></FontAwesomeIcon>
                          thể loại phim
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          bình luận phim 
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          blog điện ảnh
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          Phim hay tháng
                        </li>
                      </ul>
                    </li>
                </ul>
                </Col>
                <Col lg={3} md={6} xs={6}>
                <ul className={cx('list-unstyled')}>
                    <li>
                      <h1 className={cx("title")}>Hỗ trợ</h1>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} ></FontAwesomeIcon>
                          góp ý 
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          sale & services 
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          rạp/giá vé
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                          tuyển dụng
                        </li>
                      </ul>
                    </li>
                </ul>
                </Col>
                <Col lg={3} md={6} xs={6}>
                    <li>
                      <h1 className={cx("title", "title-connect")}>kết nối galaxy cinema</h1>
                      <ul className={cx("connect-icons")}>
                        <li><FontAwesomeIcon className={cx("footer-icon", "fbIcon")} icon={faFacebook}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon className={cx("footer-icon")} icon={faInstagram}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon className={cx("footer-icon")} icon={faYoutube}></FontAwesomeIcon></li>
                      </ul>
                      <h1 className={cx("title", "title-connect")}>kết nối galaxy cinema</h1>
                      <ul className={cx("download-icons")}>
                        <li><FontAwesomeIcon className={cx("footer-icon")} icon={faAppStore}></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon className={cx("footer-icon")} icon={faAppleAlt}></FontAwesomeIcon></li>
                      </ul>
                    </li>
                </Col>
            </Row>
            <Row>
              <div className={cx("wrap-icon")}>
                <img src="https://www.galaxycine.vn/website/images/glx_trade.png"></img>
              </div>
            </Row>
          </Container>
          <Container fluid className={cx("the-line")}>
            <Container className={cx('footer-line')}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                      <a href="" className={cx("footer-line-icon")}>
                        <img src="https://www.galaxycine.vn/website/images/galaxy-logo-footer.png" alt="Galaxy Cinema" className={cx("loading")} data-was-processed="true" />
                      </a>
                      <p>
                      Công Ty Cổ Phần Phim Thiên Ngân,Tầng 5, Toà Nhà Mặt Trời Sông Hồng, 23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội
                      </p>
                  </Col>
                </Row>
            </Container>
          </Container>
        </Container>
    </div>
  )
}

export default Footer