import { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import styles from "./Schedule.module.scss";
import { Container } from "react-bootstrap";

import ContentCeo from '~/components/ContentCeo';
import { onshowing, oncomming } from "./scheduleData";
import FancyBox from '~/components/FancyBox';

const cx = classNames.bind(styles);

function Schedule() {
  const height = 435 + 'px';
  const width = 240 + 'px';
  const [ tabActive, setTabActive ] = useState('tab-onshowing');
  const [ postActive, setPostActive ] = useState(tabActive);

  useEffect(() => {
    setPostActive(tabActive)
  }, [tabActive])


  return (
    <div className={cx('wrapper')}>
      <Container style={{marginTop: '50px'}}>
      <div className={cx("movie-box")}>
        {/*Tab line*/}
        <div className={cx("tab-movie-line")}>
          <ul className={cx("movie-tab-line")}>
              <li className={cx("movie-tab-line-item")}
                  onClick={() => setTabActive("tab-onshowing")}
                  style={tabActive === 'tab-onshowing' ? {color:'#000000'} : {color: '#a0a3a7'}}>
                Phim đang chiếu
                <span className={cx("movie-tab-active")} 
                      style={tabActive === "tab-onshowing"? {display: 'block'} : {display: 'none'}}></span>
              </li>
              <li className={cx("movie-tab-line-item")}
                  onClick={() => setTabActive("tab-oncomming")}
                  style={tabActive === "tab-oncomming" ? {color:'#000000'} : {color: '#a0a3a7'}}>
                Phim sắp chiếu
                <span className={cx("movie-tab-active")}
                    style={tabActive === "tab-oncomming"? {display: 'block'} : {display: 'none'}}></span>
              </li>
          </ul>
        </div>
        {/*Tab content*/}
        <div className={cx("tab-content")}>
            <div className={cx("tab-onshowing")} 
                style={postActive === 'tab-onshowing' ? {display: 'block'} : {display: 'none'}}>
              <FancyBox item={onshowing} width={width} height={height} />
            </div>
            <div className={cx("tab-oncomming")}
                style={postActive === 'tab-oncomming' ? {display: 'block'} : {display: 'none'}}>
              <FancyBox item={oncomming} width={width} height={height}/>
            </div>
        </div>
      </div>
        <ContentCeo></ContentCeo>
      </Container>
    </div>
  )
}

export default Schedule