import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import styles from "./Slider.module.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import carouselItems from "./dataSlider";
import BuyTicket from "../BuyTicket";
import BoxTicketMobie from "../BoxTicketMobie";

const cx = classNames.bind(styles);

function Slider({ children }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [indicator, setIndicator] = useState(currentSlide);

    const liItem =[0,1,2,3,4,5,6,7];
    const slideLength = carouselItems.length;
    let slideInterval;
    let delay = 3500;

    const prevSlide = () => {
        setCurrentSlide(prev => {
            if(prev == 0){
                return prev = 0
            }
            return prev -1
        });
    };
    const nextSlide = () => {
        setCurrentSlide((prev) => {
            if(prev == slideLength -1) {
                return prev = 0
            }
           //console.log(prev)
            return prev +1
        });
    };
    function auto() {
        slideInterval = setInterval(nextSlide, delay)
    }; 
    useEffect(() => {
        auto() 
        
        return () => clearInterval(slideInterval)
    }, []);
    useEffect(() => {
        setIndicator(currentSlide)
    }, [currentSlide])

    return (
        <div className={cx("carousel")}>
            <ol className={cx("carousel-indicator")}>
                {liItem.map((item, index) => (
                    <li key={index} 
                    style={item === indicator ? {backgroundColor: '#ffffff'}: {backgroundColor:'transparent'}}
                    onClick={() => setCurrentSlide(item)}></li>
                ))}
            </ol>
            <div className={cx("listbox")}>
                {carouselItems.map((item, index) => (
                    <a key={index} className={cx("item")}>
                        {item.id === currentSlide && <img src={item.src} />}
                    </a>
                ))}
                <a className={cx("btn-role")}>
                    <FontAwesomeIcon icon={faAngleLeft} onClick={prevSlide} />
                </a>
                <a className={cx("btn-role", "btn-role-2")}>
                    <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide} />
                </a>
            </div>

            {/*Box Quick Buy Ticket*/}
            <div className={cx('box-buy-ticket')}>
                <BuyTicket></BuyTicket>
            </div>
            <div className={cx('box-mobie-ticket')}>
                <BoxTicketMobie ></BoxTicketMobie>
            </div>
        </div>
    );
}

export default Slider;
