import React from "react";
import classNames from "classnames/bind";
import styles from "./QuickBoxTicket.module.scss";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import TitleBuyTicket from "./TitleBuyTicket";
import QBInner from "./QBInner";

const cx = classNames.bind(styles);
function QuickBoxTicket() {
  return (
    <div className={cx("box-ticket")}>
      <div className={cx("btn-quickbuy")}>
        <Button colorBg xl>
          <Link to="/ticket">Mua vé nhanh</Link>
        </Button>
      </div>
      <section className={cx("box-ticket-inner")}>
        <TitleBuyTicket />
        <QBInner />
      </section>
      <div className={cx("btn-buy")}>
        <Button colorBg large>
          Mua vé
        </Button>
      </div>
    </div>
  );
}

export default QuickBoxTicket;
