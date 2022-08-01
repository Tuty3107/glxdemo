import classNames from "classnames/bind";
import styles from './BlogBox.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function BlogBox({ item=[] }) {

    const renderItem = () => {
        return(
        <div>
            {item.map((item, index) => (
                <article key={index} className={cx("blog")}>
                <div className={cx("movie-thumb")}>
                    <a href ="#" className={cx("hasOverlay")}>
                        <img src={item.src}></img>
                    </a>                    
                </div>
                <div className={cx("blog-descript")}>
                    <h5>
                        <a href="#">{item.titlePriview}</a>
                    </h5>
                    <ul>
                        <li className={cx("likes")}>
                        <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                        Thích 50
                        </li>
                        <li className={cx("views")}>
                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                            235
                        </li>
                        <li className={cx("star")}>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        0.0/10 (0)
                        </li>
                    </ul>
                    <div className={cx("blog-content")}>
                        <p>{item.blogContent}</p>
                    </div>
                </div>
            </article>))}
        </div>
        )
    }
  return (
    <div>
        {renderItem()}
    </div>
  )
}

export default BlogBox