import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogBox from "./BlogBox";
import useFirestore from "../../hooks/useFirestore";
import TitleLine from "../TitleLine";

function BlogMovie() {
  const blog1 = useFirestore("/blogs/sNKbZ1oZm1p9nTmF2VtG/blog1");
  const blog2 = useFirestore("/blogs/sNKbZ1oZm1p9nTmF2VtG/blog2");
  return (
    <Row>
      <Col lg={6} xs={12} style={{ marginBottom: "40px" }}>
        <TitleLine>Blog điện ảnh</TitleLine>
        {blog2 && blog2.map((item, idx) => (
          <BlogBox
            key={idx}
            to={`/blog/${item.preview}`}
            src={item.src}
            preview={item.preview}
            content={item.content}
          />
        ))}
      </Col>
      <Col lg={6} xs={12} style={{ marginBottom: "40px" }}>
        <TitleLine>Bình luận phim</TitleLine>
        {blog1 && blog1.map((item, idx) => (
          <BlogBox
            key={idx}
            to={`/blog/${item.preview.toString()}`}
            src={item.src}
            preview={item.preview}
            content={item.content}
          />
        ))}
      </Col>
    </Row>
  );
}
export default BlogMovie;
