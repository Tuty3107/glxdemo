import React from "react";
import useFirestore from "~/hooks/useFirestore";
import TitleLine from "../TitleLine";
import ArticleImg from "../ArticleImg";

function ColShowing() {
  const movies = useFirestore("films");
  let coming = [];
  let showing = [];
  movies.map((movie) => {
    if (movie.coming === true) {
      coming.push(movie);
    } else if (movie.coming === false) {
      showing.push(movie);
    }
  });
  const showItems = showing.filter((item, index) => {
    if (index < 3) {
      return showing[index];
    }
  });
  return (
    <div style={{ marginTop: "50px" }}>
      <TitleLine>Phim đang chiếu</TitleLine>
      {showItems.map((movie, index) => (
        <ArticleImg
          md
          btn
          key={index}
          rate={movie.rate}
          children="MUA VÉ"
          to={`/buyticket/${movie.vnTit.toString()}`}
          url={process.env.PUBLIC_URL + `/img/${movie.tabpaneUrl}`}
        />
      ))}
    </div>
  );
}

export default ColShowing;
