import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss";
const cx = classNames.bind(styles);

function Wrapper({ children, bg333=false, bg000=false}) {
  const classes = cx("wrapper", {
    bg333,
    bg000
  })
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  bg333: PropTypes.bool,
  bg000: PropTypes.bool
}
export default Wrapper;
