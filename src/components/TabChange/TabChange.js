import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./TabChange.module.scss";
import { Tab, Nav } from "react-bootstrap";
const cx = classNames.bind(styles);
function TabChange({ text1, text2, text3, content1, content2 }) {
  return (
    <Tab.Container defaultActiveKey="first">
      <Nav>
        <Nav.Item className={cx("tab-line")}>
          <Nav.Link className={cx("tab-line-item")} eventKey="first">
            {text1}
          </Nav.Link>
          <Nav.Link className={cx("tab-line-item")} eventKey="second">
            {text2}
          </Nav.Link>
          <Nav.Link className={cx("tab-line-item")} eventKey="third">
            {text3}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">{content1}</Tab.Pane>
        <Tab.Pane eventKey="third">{content2}</Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}

TabChange.propsTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  content1: PropTypes.node,
  content2: PropTypes.node
}
export default TabChange;
