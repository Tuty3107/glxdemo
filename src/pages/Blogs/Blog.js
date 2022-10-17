import React, { useState } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faThumbsUp,
  faStar,
  faTags,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import TitleLine from "~/components/TitleLine";
import { useFirestore } from "~/hooks";
import styles from "./Blog.module.scss";
import BoxPromo from "~/components/BoxPromo/BoxPromo";
import ArticleImg from "~/components/ArticleImg";
import ColShowing from "~/components/ColShowing";
import { StoreProvider } from "~/store";
import QBInner from "~/components/QuickBoxTicket/QBInner";

const cx = classNames.bind(styles);
function Blog() {
  const [items, setItems] = useState([]);
  const tags = useFirestore("tags");
  const blog1 = useFirestore("/blogs/sNKbZ1oZm1p9nTmF2VtG/blog1");
  const blog2 = useFirestore("/blogs/sNKbZ1oZm1p9nTmF2VtG/blog2");
  const blogs = [...blog1, ...blog2];
  const params = useParams();
  const blog = blogs.find((blog) => params.blogId === blog.preview.toString());

  React.useEffect(() => {
    if (blog && blog.cmtpart === true) {
      setItems(blog1);
    } else {
      setItems(blog2);
    }
  }, [blog]);

  return (
    <div style={{ marginTop: "50px" }}>
      <Container fluid className={cx("boxquick-header")}>
        <section className={cx("box-ticket-inner")}>
          <StoreProvider>
            <QBInner />
          </StoreProvider>
        </section>
      </Container>
      <Container style={{ marginTop: "50px" }}>
        <Row className={cx("block-wrapper")}>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className={cx("content-wrapper")}>
              {blog && <h1 className={cx("content-title")}>{blog.preview}</h1>}
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
              {blog && (
                <img alt="" src={process.env.PUBLIC_URL + `/blogImg/${blog.src}`} />
              )}
            </div>
            <div className={cx("content-tags")}>
              <FontAwesomeIcon icon={faTags} />
              <ul className={cx("text-tags")}>
                {tags[0] &&
                  tags[0].name.map((tag, index) => <li key={index}>{tag}</li>)}
              </ul>
            </div>
            <section id="relatedpost">
              <TitleLine>Bài viết liên quan</TitleLine>
              <Row className={cx("ralated")}>
                <ul className={cx("related-post")}>
                  {blogs &&
                    blogs.map((blog, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faArrowRight} />
                        <a href="#">{blog.preview}</a>
                      </li>
                    ))}
                </ul>
              </Row>
            </section>
            <section id="relatedpost">
              {blog && (
                <Row className={cx("related")}>
                  <TitleLine>
                    {blog.cmtpart === false
                      ? "Bình luận phim"
                      : "Blog điện ảnh"}
                  </TitleLine>
                  {items.map((item, idx) => (
                    <ArticleImg
                      key={idx}
                      blog
                      btn
                      children="CHI TIẾT"
                      to={`/buyticket/${item.vnTit}`}
                      url={process.env.PUBLIC_URL + `/blogImg/${item.src}`}
                    />
                  ))}
                </Row>
              )}
            </section>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <BoxPromo />
            <ColShowing />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Blog;
