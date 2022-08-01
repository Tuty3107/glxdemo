import classNames from "classnames/bind";
import styles from "./MovieType.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { movieType, nation, year, oncoming, newest } from "./optionData";
import { blogMoviedata1, blogMoviedata2 } from "~/components/BlogMoive/BlogMoviedata";
import { moviedata } from "./moviedata";
import Select from "~/components/Select";
import BlogBox from "~/components/BlogBox";
import ContentCeo from "~/components/ContentCeo";
import Button from "~/components/Button";
import BoxTicketMobie from "~/components/BoxTicketMobie";

const cx = classNames.bind(styles);

function MovieType() {

  return (
    <Container style={{marginTop: '70px', marginBottom: "100px"}}>
        <Row>
            <Col lg={8}>
            {/*select-group*/}
                <div className={cx("select-group")}>
                    <a className={cx("select-type")}>
                        <span className={cx("title")}>Thể loại</span>
                        <span className={cx("select-icon")}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <Select item={movieType}/>
                    </a>
                    <a className={cx("select-nation")}>
                        <span className={cx("title")}>Quốc gia</span>
                        <span className={cx("select-icon")}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <Select item={nation}/>
                    </a>
                    <a className={cx("select-year")}>
                        <span className={cx("title")}>Năm</span>
                        <span className={cx("select-icon")}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <Select item={year}/>
                    </a>
                    <a className={cx("select-items")}>
                        <span className={cx("title")}>Đang chiếu/Sắp chiếu</span>
                        <span className={cx("select-icon")}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <Select item={oncoming}/>
                    </a>
                    <a className={cx("select-year")}>
                        <span className={cx("title")}>Mới nhất</span>
                        <span className={cx("select-icon")}>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                        <Select item={newest}/>
                    </a>
                </div>
            {/*phim dien anh*/}
            <div className={cx("tab-movie-line")}>
                <ul className={cx("movie-tab-line")}>
                    <li className={cx("movie-tab-line-item")}>
                    Phim điện ảnh
                    <span className={cx("movie-tab-active")} ></span>
                    </li>
                </ul>
            </div>
            <BlogBox item={blogMoviedata1} />
            <BlogBox item={blogMoviedata2} />
            </Col>
            <Col lg={4}>
            <div className={cx("quick-buy-ticket")}>
                <BoxTicketMobie />
            </div>
            <div className={cx("tab-movie-line")}>
                <ul className={cx("movie-tab-line")}>
                    <li className={cx("movie-tab-line-item")}>
                    Phim đang chiếu
                    <span className={cx("movie-tab-active")} ></span>
                    </li>
                </ul>
                <div>
                {moviedata.map((item, index) => (
                <article key={index} className={cx('artical-movie')} 
                  style={{backgroundImage:`url(${item.url})`}}>
                  <figure className={cx('overlay')}>
                      <div className={cx("rate")}>
                          {item.rate && <span>{item.rate}</span>}
                      </div>
                      <Button to="/Buy-ticket" primary medium>Mua vé</Button>
                  </figure>                                       
                </article>))}
                </div>
            </div>
            </Col>
        </Row>
        <Row>
            <ol className={cx("order-list")}>
                <li className={cx("order-list-item")}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </li>
                <li className={cx("order-list-item", "active")}>1</li>
                <li className={cx("order-list-item")}>2</li>
                <li className={cx("order-list-item")}>3</li>
                <li className={cx("order-list-item")}>4</li>
                <li className={cx("order-list-item")}>5</li>
                <li className={cx("order-list-item")}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </li>
            </ol>
        </Row>
        <ContentCeo></ContentCeo>
    </Container>
  )
}

export default MovieType;