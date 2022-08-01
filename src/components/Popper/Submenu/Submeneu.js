import classNames from "classnames/bind";
import styles from "./Submenu.module.scss";
import { Wrapper as PopperWrapper} from '~/components/Popper';
import {Link} from "react-router-dom"; 
import Tippy from "@tippyjs/react/headless";

const cx = classNames.bind(styles);

function Submenu({ children, item=[]}) {

    const renderItem = () => {
        return (
            <li className={cx('sub-menu')}>
                <ul>
                {item.map((item, index) => (
                    <li key={index} className={cx('submenu-list')}>
                        <Link to={item.to}>{item.content}</Link>
                    </li>
                ))}
                </ul>
            </li>
        )
    }
  return (
    <Tippy
        interactive
        placement="bottom-end"
        render={attrs => (
            <div tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    {renderItem()}   
                </PopperWrapper>
            </div>
        )}>
        {children}
    </Tippy>
  )
}

export default Submenu