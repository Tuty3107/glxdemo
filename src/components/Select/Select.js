import classNames from "classnames/bind";
import styles from "./Select.module.scss";

const cx = classNames.bind(styles);

function Select({ item=[] }) {
    const renderItem = () => {
        return(
            <select className={cx("select-item")}>
                {item.map((item, index) => (
                    <option key={index} className={cx("op-items")}>{item}</option>
                ))}
            </select>
        )
    }
  return (
    <div className={cx("wrapper")}>
        {renderItem()}
    </div>
  )
}

export default Select