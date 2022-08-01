import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {faSearch, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import NavMobie from "~/components/NavMobie";
import {fancyBoxdata1, fancyBoxdata2} from "~/layouts/DefaultLayout/Header/boxheaderdata";
import Submenu from '~/components/Popper/Submenu';
import { submenu1, submenu2 } from '~/components/Popper/Submenu/submenuData';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <Link to="/">
                        <img src="https://www.galaxycine.vn/website/images/galaxy-logo.png" />
                    </Link>
                </div>
                <div className={cx('primary-nav-wrapper')}>
                    <div className={cx("primary-nav")}>
                        <div className={cx("search")}>
                          <input placeholder="Tìm tên phim, diễn viên..." />
                          <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faSearch} />
                          </button>
                        </div>
                    </div>
                    <div className={cx('secondary-nav-wrapper')}>
                        <ul className={cx('secondary-nav')}>
                            <li>
                                <a className={cx('logoLink')} href="#">
                                <FontAwesomeIcon icon={faUser} />
                                Đăng nhập</a>
                            </li>
                            <li className={cx('languages')}>
                                <a className={cx('VN')}>VN</a>
                                <span>|</span>
                                <a className={cx('EN')}>EN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*Navigation*/}
            <div className={cx('nav-wrapper')}>
                <div className={cx('nav-container')}>
                    <nav>
                        <ul className={cx('primary-nav')}>
                            <li>
                                <Link to="/ticket" className={cx('primary-nav-tit')}>Mua vé</Link>
                            </li>
                            <li className={cx('subnav')}>
                                <a className={cx('primary-nav-tit')}>Phim</a>
                                <FontAwesomeIcon icon={faAngleDown}/> 
                                <div className={cx('submenu-movie')}>
                                    <Link to="/schedule" className={cx('submenu-title')}>
                                        <h3>Phim đang chiếu</h3>
                                    </Link> 
                                    <div className={cx('submenu-group')}>
                                        {fancyBoxdata1.map((item, index) => (
                                        <div key={index} className={cx('movie-item')}>
                                            <div className={cx('movie-item-content')}>
                                                <article className={cx('artical-movie')} style={{backgroundImage:`url(${item.url})`}}>
                                                    <figure className={cx('overlay')}>
                                                    <Button to="/Buy-ticket" primary small>Mua vé</Button>
                                                    </figure>                                       
                                                </article>
                                                <div className={cx('movie-item-title')}>
                                                    <h4 className={cx('upper-text')}>{item.enTit}</h4>
                                                    <h4 className={cx('vn-upper-text')}>{item.vnTit}</h4>
                                                </div>
                                            </div>
                                        </div>))}
                                    </div>
                                    <Link to="/schedule" className={cx('submenu-title')}>
                                        <h3>Phim sắp chiếu</h3>
                                    </Link>
                                    <div className={cx('submenu-group')}>
                                    {fancyBoxdata2.map((item, index) => (
                                        <div key={index} className={cx('movie-item')}>
                                            <div className={cx('movie-item-content')}>
                                                <article className={cx('artical-movie')} style={{backgroundImage:`url(${item.url})`}}>
                                                    <figure className={cx('overlay')}>
                                                    <Button to="/Buy-ticket" primary small>Mua vé</Button>
                                                    </figure>                                       
                                                </article>
                                                <div className={cx('movie-item-title')}>
                                                    <h4 className={cx('upper-text')}>{item.enTit}</h4>
                                                    <h4 className={cx('vn-upper-text')}>{item.vnTit}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>                             
                            </li>
                            <Submenu item={submenu1} >
                                <li className={cx('subnav')}>
                                    <a className={cx('primary-nav-tit')}>Góc điện ảnh</a>
                                    <FontAwesomeIcon icon={faAngleDown}/>
                                </li>
                            </Submenu>
                            <Submenu item={submenu2}>
                                <li className={cx('subnav')}>
                                    <a className={cx('primary-nav-tit')}>Sự kiện</a>
                                    <FontAwesomeIcon icon={faAngleDown}/>                                
                                </li>
                            </Submenu>
                            <li><a className={cx('primary-nav-tit')}>Rạp/Giá vé</a></li>
                            <li><a className={cx('primary-nav-tit')}>Hỗ trợ</a></li>
                            <li><a className={cx('primary-nav-tit')}>Thành viên</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={cx("nav-mobie")}>
                <NavMobie></NavMobie>
            </div>
        </div>
    );
}

export default Header;
