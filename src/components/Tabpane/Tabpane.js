import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Tabpane.module.scss";
import { Row } from "react-bootstrap";
import {tabpaneData1, tabpaneData2} from "./TabpaneData";
import FancyBox from "~/components/FancyBox";

const cx = classNames.bind(styles);
const height = 265 + 'px';
const width = 600 + 'px'

function Tabpane() {
    const [ tabActive, setTabActive ] = useState('Phim đang chiếu')
    const [ tabPaneActive, setTabPaneTabActive ] = useState(tabActive)
    
    useEffect(() => {
        setTabPaneTabActive(tabActive)
    }, [tabActive])
    
  return (
    <div className={cx("tabpane-movie")}>
        <ul className={cx("movie-tab-line")}>            
            <li className={cx("movie-tab-line-item")} 
                onClick={() => setTabActive('Phim đang chiếu')}> Phim đang chiếu
                <span className={cx("movie-tab-active")} 
                    style={tabActive === 'Phim đang chiếu'? {display:'block'} : {display:'none'}}>
                </span>
            </li>
            <li className={cx("movie-tab-line-item")} 
                onClick={() => setTabActive('Phim sắp chiếu')}> Phim sắp chiếu
                <span className={cx("movie-tab-active")} 
                    style={tabActive === 'Phim sắp chiếu'? {display:'block'} : {display:'none'}}>
                </span>
            </li>
        </ul>

        <div className={cx("tab-movie-content")}>
            <Row className={cx("movie-group")}>
                <div className={cx('tabpane-1')} 
                    style={tabPaneActive ==='Phim đang chiếu' ? {display:'block'} : {display:'none'}}>
                    <FancyBox item={tabpaneData1} width={width} height={height}/> 
                </div>
                <div className={cx('tabpane-2')} 
                    style={tabPaneActive ==='Phim sắp chiếu' ? {display:'block'} : {display:'none'}}>
                    <FancyBox item={tabpaneData2} width={width} height={height}/>  
                </div>
            </Row>
        </div>
    </div>
  )
}

export default Tabpane