import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./FancyBox.module.scss";
import { Row , Col} from "react-bootstrap";

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function FancyBox({ item=[], width, height}) {
  const artRef = useRef();
  const renderItem = () => {
    let x = 3; 
    let y = 6;   
    if(width >= 600 + 'px') { x = 4 };
    return(
      <Row>
        {item.map((item, index) => (
          <Col lg={x} md={x} sm={y} xs={y} key={index}>
              <article className={cx('artical-movie')} ref={artRef}
                  style={{backgroundImage:`url(${item.url})`, width:width, height:height}}>
                  <figure className={cx('overlay')}>
                      <div className={cx("rate")}>
                          {item.rate && <span>{item.rate}</span>}
                      </div>
                      <Button to="/Buy-ticket" primary medium>Mua vé</Button>
                  </figure>                                       
              </article>
            <div className={cx('movie-item-title')}>
                <h4 className={cx('upper-text')}>{item.titleEN}</h4>
                <h4 className={cx('vn-upper-text')}>{item.titleVN}</h4>
            </div>
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <div>
      {renderItem()}
    </div>
  )
}

export default FancyBox