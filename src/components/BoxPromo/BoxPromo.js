import React from "react";
import classNames from "classnames/bind";
import styles from "./BoxPromo.module.scss";
import Button from "~/components/Button";
import TitleLine from "~/components/TitleLine";

const cx = classNames.bind(styles);
export default function BoxPromo() {
  return (
    <>
      <TitleLine>Nhận khuyến mãi</TitleLine>
      <div className={cx("box-promotion")}>
        <form className={cx("form-promotion")}>
          <input placeholder="Email" />
          <div className={cx("form-btn")}>
            <Button xl colorBg>
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
