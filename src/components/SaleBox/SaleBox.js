import classNames from "classnames/bind";
import styles from "./SaleBox.module.scss";
import {Col, Row } from "react-bootstrap";

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SaleBox({ item=[] }) {

    const renderItem = () => {
        return(
            <Row>
            {item.map((item, index) => (
                <Col lg={3} md={6} xs={6} key={index}>
                    <div className={cx("promotion-item")}>
                        <a href="#">
                            <img src={item.src}></img>
                        </a>
                        <div className={cx("description", "overlay")}>
                            <div className={cx("info")}>
                                <a href="#">
                                    {item.infoTitle && <h2>{item.infoTitle}</h2>}
                                </a>
                                {item.infoTitle && <p>{item.infoContent}</p>}
                            </div>
                            <div className={cx("group")}>
                                <Button primary large>
                                    <span>CHI TIẾT</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
            </Row>
    )}
  
    return (
    <div>{renderItem()}</div>
    )
}

export default SaleBox;