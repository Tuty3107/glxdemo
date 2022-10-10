import PropTypes from "prop-types";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import styles from "./Submenu.module.scss";
import { Wrapper as WrapSubMenu } from "~/components/Wrapper";

const cx = classNames.bind(styles);
function Submenu({ children, items, onClick }) {
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
    <HeadlessTippy
      appendTo={() => document.body}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div tabIndex="-1" {...attrs} 
          style={{position: 'relative', top: '-10px'}}>
          <WrapSubMenu>{renderItem()}</WrapSubMenu>
        </div>
      )}
    >
      {children}
    </HeadlessTippy>
  );
}

Submenu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
export default Submenu;
