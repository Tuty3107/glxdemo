import classNames from "classnames/bind";
import styles from './BlogMovie.module.scss';
import { Col, Row } from "react-bootstrap";

import {blogMoviedata1 , blogMoviedata2} from "./BlogMoviedata";
import BlogBox from "~/components/BlogBox";

const cx = classNames.bind(styles);

function BlogMovie() {
  return (
    <div>
    <Row>
        <Col lg={6} xs={12}>
            <a href="#" className={cx("title-blog")}>
                <h3>Blog điện ảnh</h3>
            </a>
            <BlogBox item={blogMoviedata1}/>
        </Col>
        <Col lg={6} xs={12}>
            <a href="#" className={cx("title-blog")}>
                <h3>Bình luận phim</h3>
            </a>
           <BlogBox item={blogMoviedata2}/>          
        </Col>
    </Row>
    </div>
  )
}

export default BlogMovie