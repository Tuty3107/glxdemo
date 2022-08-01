import styles from './Sale.module.scss';
import classNames from "classnames/bind";

import saleData from './SaleData';
import SaleBox from '../SaleBox';

const cx = classNames.bind(styles);

function Sale() {
  return (
    <div>
        <section className={cx("promotion")}>
            <a href="#" className={cx("title-blog")}>
                <h3>Tin khuyến mãi</h3>
            </a>
            <SaleBox item={saleData} />
        </section>
    </div>
  )
}

export default Sale