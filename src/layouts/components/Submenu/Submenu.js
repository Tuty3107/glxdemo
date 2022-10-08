import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import styles from "./Submenu.module.scss";
import { Wrapper as WrapSubMenu } from "~/components/Wrapper";

const cx = classNames.bind(styles);
function Submenu({ children, items = [], onClick }) {
  const renderItem = () => {
    return (
      <li className={cx("sub-menu")}>
        <ul>
          {items.map((item, index) => (
            <li key={index} className={cx("submenu-list")}>
              <Link to={item.to} onClick={onClick}>
                {item.content}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  };
  return (
    <Tippy
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div tabIndex="-1" {...attrs}>
          <WrapSubMenu>{renderItem()}</WrapSubMenu>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Submenu;
