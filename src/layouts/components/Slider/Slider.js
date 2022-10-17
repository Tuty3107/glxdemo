import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination, Autoplay } from "swiper";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import QuickBoxTicket from "~/components/QuickBoxTicket";
import { useFirestore } from "~/hooks"
import { Wrapper } from "~/components/Wrapper";

const cx = classNames.bind(styles);
function Slider() {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  const sliders = useFirestore("carousel");
  const slides = sliders.map((i) => i.src);

  return (
    <div className={cx("wrapper")}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        speed={800}
        loop
        className={cx("myswipper")}
      >
        {slides[0] && slides[0].map((sliderItems, index) => (
          <SwiperSlide key={index} className={cx("swipperslide")}>
            {<img alt="" src={process.env.PUBLIC_URL +`/sliderImg/${sliderItems}`} />}
           </SwiperSlide>
        ))}
        <div className={cx("swipper-btn-prev")} ref={swiperNavPrevRef}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className={cx("swipper-btn-next")} ref={swiperNavNextRef}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </Swiper>
      <div className={cx("box-ticket")}>
        <Wrapper bg333>
          <QuickBoxTicket />
        </Wrapper>
      </div>
      <div className={cx("box-ticket-mobie")}>
        <Wrapper bg000>
          <QuickBoxTicket />
        </Wrapper>
      </div>
    </div>
  );
}

export default Slider;
