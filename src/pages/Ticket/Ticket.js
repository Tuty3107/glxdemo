import React from "react";
import { Container } from "react-bootstrap";
import MovieGroup from "./MovieGroup";
import CineGroup from "./CineGroup";
import TabChange from "../../components/TabChange/TabChange";

function Ticket() {
  return (
    <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
      <TabChange
        text1={"Theo phim"}
        text3={"Theo rạp"}
        content1={<MovieGroup />}
        content2={<CineGroup />}
      />
    </Container>
  );
}

export default Ticket;
