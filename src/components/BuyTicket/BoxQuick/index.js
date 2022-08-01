import classNames from "classnames/bind";
import styles from "./Boxquick.module.scss";

const cx = classNames.bind(styles);

function BoxQuick({children}) {
  return (
    <div className={cx("box-quick")}>
        {children}
    </div>
  )
}

export default BoxQuick