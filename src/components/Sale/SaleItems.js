import React from "react";
import { Row, Col } from "react-bootstrap";
import ArtImg from "../ArticleImg";

function SaleItems({items, folder, text}) {
  let columns = [];
  items.forEach((movie, i) => {
    if (((i + 3) * 3) % 3 === 0) {
      columns.push(
        <Col key={i} lg={3} md={6} sm={6} xs={6}>
          <ArtImg 
            lg btn
            title={movie.title}
            content={movie.content}
            children="MUA VÉ"
            to={`/sale/${movie.content}`}
            url={process.env.PUBLIC_URL + `/${folder}/${movie.src|| movie.scheduleUrl}`}
          />
        </Col>
      );
    } else {
      columns.push(
        <Col lg={3} md={6} sm={6} xs={6} key={i}>
          <ArtImg 
            lg btn
            title={movie.title}
            content={movie.content}
            children="MUA VÉ"
            url={process.env.PUBLIC_URL + `/${folder}/${movie.src|| movie.scheduleUrl}`}
          />
        </Col>
      );
    }
  });
  return <Row style={{ width: "100%" }}>{columns}</Row>;
}

export default SaleItems;
