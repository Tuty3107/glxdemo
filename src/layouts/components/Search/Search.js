import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Search.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Wrapper";
import { useDebounce } from "~/hooks";

const cx = classNames.bind(styles);
function Search() {
  const [search, setSearch] = useState("a");
  const [searchResult, setSearchresult] = useState([]);
  const [showResult, setshowResult] = useState(true);
  const debounced = useDebounce(searchResult, 500);
  const FetchValue = async () => {
    setSearchresult([]);

    const res = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${search}&swf&limit=3`
    );
    setSearchresult(res.data.data);
  };

  React.useEffect(() => {
    const timerID = setTimeout(() => {
      FetchValue();
    }, 700);

    return () => clearTimeout(timerID);
  }, [search]);
  const handleHideResult = () => {
    setshowResult(false);
  };
  return (
    <div>
      <Tippy
        interactive
        visible={showResult && searchResult.length > 0}
        onClickOutside={handleHideResult}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper bg000>
              {searchResult &&
                searchResult.map((item) => (
                  <div className={cx("searchValue-Items")} key={item.mal_id}>
                    <Link to="*">{item.title}</Link>
                  </div>
                ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("search")}>
          <input
            onFocus={() => setshowResult(true)}
            placeholder="Tìm tên phim, diễn viên..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={cx("btn-search")}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </Tippy>
    </div>
  );
}

export default Search;
