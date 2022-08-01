import classNames from "classnames/bind";
import styles from "./BuyTicket.module.scss";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BuyTicket() {
  return (
    <div className={cx("wrapper-box")}>
        <div className={cx("btn-quickbuy")}>
            <Button colorBg xl>
                <span>
                    <Link to="/ticket">Mua vé nhanh</Link>
                </span>
            </Button>
        </div>
        <div className={cx("box-buy-ticket")}>    
        <section className={cx("quick-buy-ticket")}>
            {/*Title part*/}
            <div className={cx("title-part")}>
                <input id="tab-1" type="radio" 
                    className={cx("tab-selection-1")}/>
                <label htmlFor="tab-1" className={cx("tab-label-1")}>
                    Theo phim
                </label>
                <input id="tab-2" type="radio" 
                    className={cx("tab-selection-2")}/>
                <label htmlFor="tab-2" className={cx("tab-label-2")}>
                    Theo ngày 
                </label>
                <input id="tab3" type="radio" 
                    className={cx("tab-selection-3")}/>
                <label htmlFor="tab3" className={cx("tab-label-3")}>
                    Theo rạp
                </label>
            </div>  
            {/*Group films-movie theater-day*/}
            <div className={cx("id-block-ticket")}>
                <div className={cx("content-1")}>
                    <form>
                        <div className={cx("group-select")}>
                            <a className={cx("btn-select")}>
                                <span className={cx("btn-select-value")}>Chọn phim</span>
                                <span className={cx("btn-select-arrow")}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                <select name="films" className={cx("films")}>
                                    <option></option>
                                    <option>Thor: Love And Thunder</option>
                                    <option>Minions: The Rise of Gru</option>
                                    <option>Decision To Leave</option>
                                    <option>Karem La Possesion</option>
                                    <option>Detective Conan Movie 25: The Bride of Halloween</option>
                                    <option>Cherry Magic! Thirty Years of Virginity Can Make You A Wizza</option>
                                    <option>Poporo: Cuộc phiêu lưu đến đảo khủng long</option>
                                    <option>Virus: 32</option>
                                    <option>The Witch: Part 2. The Other One</option>
                                    <option>Em và Trịnh </option>
                                </select>
                            </a>
                        </div>
                    </form>
                </div>
                <div className={cx("content-2")}>
                    <form>
                        <div className={cx("group-select")}>
                            <a className={cx("btn-select")}>
                                <span className={cx("btn-select-value")}>Chọn ngày</span>
                                <span className={cx("btn-select-arrow")}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                <select name="films" className={cx("films")}></select>
                            </a>
                        </div>
                    </form>
                </div>
                <div className={cx("content-3")}>
                    <form>
                        <div className={cx("group-select")}>
                            <a className={cx("btn-select")}>
                                <span className={cx("btn-select-value")}>Chọn rạp</span>
                                <span className={cx("btn-select-arrow")}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                <select name="cinema" className={cx("films")}>
                                    <option></option>                                
                                </select>
                            </a>
                        </div>
                    </form>
                </div>
                <div className={cx("content-4")}>
                    <form>
                        <div className={cx("group-select")}>
                            <a className={cx("btn-select")}>
                                <span className={cx("btn-select-value")}>Chọn suất</span>
                                <span className={cx("btn-select-arrow")}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                <select name="cinema" className={cx("films")}>
                                    <option></option>                                
                                </select>
                            </a>
                        </div>
                    </form>
                </div>
            </div> 
        </section>
        </div>
        <div className={cx("btn-buy")}>
            <Button colorBg large>
                <span>Mua vé</span>
            </Button>
        </div>
    </div>
  )
}

export default BuyTicket