import React from "react";
import classNames from "classnames/bind";
import styles from "./Sale.module.scss";
import TitleLine from "../TitleLine/TitleLine";
import useFirestore from "~/hooks/useFirestore";
import SaleItems from "./SaleItems";

const cx = classNames.bind(styles);
function Sale() {
  const sales = useFirestore("sales");
  return (
    <section className={cx("promotion")}>
      <TitleLine>Tin khuyến mãi</TitleLine>
      <SaleItems items={sales} text="Chi tiết" folder={"/promotion"} />
    </section>
  );
}

export default Sale;
